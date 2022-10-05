using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Training_Project_1.Models;
using Training_Project_1.Models.Context;

namespace Training_Project_1.Repositories
{
    public class AccountRepo : IAccountRepo
    {
        private readonly DataContext _dataContext;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IConfiguration _configuration;

        public AccountRepo(DataContext dataContext,
                           UserManager<IdentityUser> userManager,
                           SignInManager<IdentityUser> signInManager,
                           IConfiguration configuration)
        {
            _dataContext = dataContext;
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        public async Task<IdentityResult> SignUp(string email, string roleID, string password)
        {
            var user = new IdentityUser()
            {
                UserName = email,
                Email = email
            };

            var result = await _userManager.CreateAsync(user, password);

            if (result.Succeeded)
            {
                var roleName = _dataContext.Roles.First(role => role.RoleID == roleID).RoleName;
                result = await _userManager.AddToRoleAsync(user, roleName);
            }

            return result;
        }

        public async Task<string?> SignIn([FromBody] string email, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(email, password, false, false);

            if (!result.Succeeded)
            {
                return null;
            }

            var user = await _userManager.FindByEmailAsync(email);
            var roleName = (await _userManager.GetRolesAsync(user)).First();

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, email),
                new Claim(ClaimTypes.Role, roleName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var authSignKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddDays(3),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSignKey, SecurityAlgorithms.HmacSha256Signature)
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
