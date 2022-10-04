using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Training_Project_1.Models;
using Training_Project_1.Models.ContactModels;
using Training_Project_1.Models.Context;

namespace Training_Project_1.Repositories
{
    public class AccountRepo
    {
        private readonly DataContext _dataContext;
        private readonly UserManager<ApplicationUser> _userManager;

        public AccountRepo(DataContext dataContext, UserManager<ApplicationUser> userManager)
        {
            _dataContext = dataContext;
            _userManager = userManager;
        }

        public async Task<IdentityResult> SignUp(User signup, [FromBody] string password)
        {
            var user = new ApplicationUser()
            {
                Name = signup.Name,
                UserName = signup.Email,
                Email = signup.Email
            };

            var result = await _userManager.CreateAsync(user, password);

            if (result.Succeeded)
            {
                var roleName = _dataContext.Roles.First(role => role.RoleID == signup.RoleID).RoleName;
                result = await _userManager.AddToRoleAsync(user, roleName);
            }
            return result;
        }

    }
}
