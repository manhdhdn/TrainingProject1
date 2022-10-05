using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Training_Project_1.Models;

namespace Training_Project_1.Repositories
{
    public interface IAccountRepo
    {
        Task<IdentityResult> SignUp(string email, string roleID, string password);
        Task<string?> SignIn([FromBody] string email, string password);
    }
}
