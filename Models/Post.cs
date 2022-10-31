using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;

namespace Training_Project_1.Models
{
    public class Post
    {
        [Key, StringLength(36)]
        public string PostID { get; set; } = null!;
        public DateTime PostedDate { get; set; }
        public DateTime UntilDate { get; set; }
        [StringLength(70)]
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int Experience { get; set; }
        public string Address { get; set; } = null!;
        [Column(TypeName = "money")]
        public decimal Salary { get; set; }
        public bool Status { get; set; }

        [ForeignKey("User")]
        public string UserID { get; set; } = null!;
        public virtual User? User { get; set; }
    }
}
