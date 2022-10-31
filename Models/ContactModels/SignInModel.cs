using System.ComponentModel.DataAnnotations;

namespace Training_Project_1.Models.ContactModels
{
    public class SignInModel
    {
        [EmailAddress]
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
