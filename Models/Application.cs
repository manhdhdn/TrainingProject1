using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Training_Project_1.Models
{
    public class Application
    {
        [Key]
        public int ApplicationID { get; set; }
        public bool Status { get; set; }

        [ForeignKey("User")]
        public string UserID { get; set; } = null!;
        public virtual User? User { get; set; }
        [ForeignKey("Post")]
        public string PostID { get; set; } = null!;
        public virtual Post? Post { get; set; }
    }
}
