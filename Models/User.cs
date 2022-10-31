using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Training_Project_1.Models
{
    public class User
    {
        [Key, StringLength(36)]
        public string UserID { get; set; } = null!;
        [StringLength(40)]
        public string Name { get; set; } = null!;
        public bool? Gender { get; set; }
        public DateTime DayOfBirth { get; set; }
        [Phone, StringLength(10)]
        public string PhoneNumber { get; set; } = null!;
        [EmailAddress, StringLength(50)]
        public string Email { get; set; } = null!;
        public string? Address { get; set; } = null!;
        public bool Status { get; set; }
        public byte[]? CV { get; set; } = null!;

        [ForeignKey("Nominee")]
        public string NomineeID { get; set; } = null!;
        public virtual Nominee? Nominee { get; set; }
        [ForeignKey("Role")]
        public string RoleID { get; set; } = null!;
        public virtual Role? Role { get; set; }
    }
}