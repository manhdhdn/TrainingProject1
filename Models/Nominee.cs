using System.ComponentModel.DataAnnotations;

namespace Training_Project_1.Models
{
    public class Nominee
    {
        [Key, StringLength(36)]
        public string NomineeID { get; set; } = null!;
        [StringLength(10)]
        public string NomineeName { get; set; } = null!;
    }
}