using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Text;
using Training_Project_1.Models;
using Training_Project_1.Models.ContactModels;
using Training_Project_1.Models.Context;
using Training_Project_1.Repositories;
using Training_Project_1.Services;

namespace Training_Project_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IAccountRepo _accountRepo;
        private readonly IEmailSender _emailSender;
        private readonly UserManager<IdentityUser> _userManager;

        public UsersController(DataContext context,
                               IAccountRepo accountRepo,
                               IEmailSender emailSender,
                               UserManager<IdentityUser> userManager)
        {
            _context = context;
            _accountRepo = accountRepo;
            _emailSender = emailSender;
            _userManager = userManager;
        }

        //// GET: api/Users
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        //{
        //    return await _context.Users.ToListAsync();
        //}

        //// GET: api/Users/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<User>> GetUser(string id)
        //{
        //    var user = await _context.Users.FindAsync(id);

        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return user;
        //}

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(string id, User user)
        {
            if (id != user.UserID)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("SignUp")]
        public async Task<IActionResult> SignUp(SignUpModel signUpModel)
        {
            var result = await _accountRepo.SignUp(signUpModel.User.Email, signUpModel.User.RoleID, signUpModel.Password);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return ValidationProblem();
            }

            signUpModel.User.UserID = Guid.NewGuid().ToString();
            _context.Users.Add(signUpModel.User);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserExists(signUpModel.User.UserID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("SignUp", signUpModel.User.Email);
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn(SignInModel signInModel)
        {
            var token = await _accountRepo.SignIn(signInModel.Email, signInModel.Password);

            if (string.IsNullOrEmpty(token))
            {
                return Unauthorized();
            }

            if (token.Contains(' '))
            {
                return ValidationProblem(token, null, 401, "Unauthorized");
            }

            var user = await _context.Users.FirstAsync(u => u.Email == signInModel.Email);

            return Ok(new
            {
                user,
                token
            });
        }

        [HttpPost("RequestConfirmEmail")]
        public async Task<IActionResult> RequestConfirmEmail([FromBody, EmailAddress] string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
            {
                return NotFound();
            }

            if (user.EmailConfirmed)
            {
                return BadRequest();
            }

            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            var url = Url.Action("ConfirmEmail", "Users", new { code, userID = user.Id }, Request.Scheme);
            var message = "Plaese confirm your email by <a href=\"" + url + "\">clicking here</a>";

            var response = await _emailSender.SendEmailAsync(email, "Confirm your email on Training Project 1", message);

            return response.IsSuccessStatusCode ? Ok() : Problem("Failed to send email.");
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<IActionResult> ConfirmEmail(string code, string userID)
        {
            var user = await _userManager.FindByIdAsync(userID);
            code = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(code));
            var results = (await _userManager.ConfirmEmailAsync(user, code)).Errors;

            if (results.Any())
            {
                foreach (var result in results)
                {
                    ModelState.AddModelError(result.Code, result.Description);
                }

                return ValidationProblem();
            }

            return Ok();
        }

        [HttpPost("ChangePassword")]
        public async Task<IActionResult> ChangePassword(ChangePasswordModel changePasswordModel)
        {
            var user = await _userManager.FindByEmailAsync(changePasswordModel.Email);
            var results = (await _userManager.ChangePasswordAsync(user, changePasswordModel.OldPassword, changePasswordModel.NewPassword)).Errors;

            if (results.Any())
            {
                foreach (var result in results)
                {
                    ModelState.AddModelError(result.Code, result.Description);
                }

                return ValidationProblem();
            }

            return Ok();
        }

        [HttpPost("RequestResetPassword")]
        public async Task<IActionResult> RequestResetPassword([FromBody, EmailAddress] string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
            {
                return NotFound();
            }

            return Ok();
        }

        //// DELETE: api/Users/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteUser(string id)
        //{
        //    var user = await _context.Users.FindAsync(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Users.Remove(user);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool UserExists(string id)
        {
            return _context.Users.Any(e => e.UserID == id);
        }
    }
}
