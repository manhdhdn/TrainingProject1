using System.ComponentModel.DataAnnotations;

namespace Training_Project_1.Models
{
    public class Role
    {
        [Key, StringLength(36)]
        public string RoleID { get; set; } = null!;
        [StringLength(10)]
        public string RoleName { get; set; } = null!;
    }
}
