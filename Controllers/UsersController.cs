using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Training_Project_1.Models;
using Training_Project_1.Models.ContactModels;
using Training_Project_1.Models.Context;
using Training_Project_1.Repositories;

namespace Training_Project_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IAccountRepo _accountRepo;
        private readonly UserManager<IdentityUser> _userManager;

        public UsersController(DataContext context,
                               IAccountRepo accountRepo,
                               UserManager<IdentityUser> userManager)
        {
            _context = context;
            _accountRepo = accountRepo;
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

                return ValidationProblem(ModelState);
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

            return await SignIn(new SignInModel() { Email = signUpModel.User.Email, Password = signUpModel.Password });
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn(SignInModel signInModel)
        {
            var token = await _accountRepo.SignIn(signInModel.Email, signInModel.Password);

            if (string.IsNullOrEmpty(token))
            {
                return Unauthorized();
            }

            var user = _context.Users.First(u => u.Email == signInModel.Email);

            return Ok(new
            {
                user,
                token
            });
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
