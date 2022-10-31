using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Training_Project_1.Models
{
    public class PostNominee
    {
        [Key]
        public int PostNomineeID { get; set; }
        [ForeignKey("Post")]
        public string PostID { get; set; } = null!;
        public virtual Post? Post { get; set; }
        [ForeignKey("Nominee")]
        public string NomineeID { get; set; } = null!;
        public virtual Nominee? Nominee { get; set; }
    }
}
