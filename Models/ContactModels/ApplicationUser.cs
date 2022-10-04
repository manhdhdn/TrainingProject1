using Microsoft.AspNetCore.Identity;

namespace Training_Project_1.Models.ContactModels
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; } = null!;
    }
}
