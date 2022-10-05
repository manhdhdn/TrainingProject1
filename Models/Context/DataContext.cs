using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Training_Project_1.Models.Context
{
    public partial class DataContext : IdentityDbContext<IdentityUser>
    {
        public DataContext()
        {
        }

        public DataContext(DbContextOptions<DataContext> dbContextOptions)
            : base(dbContextOptions) 
        {
        }

        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Nominee> Nominees { get; set; } = null!;
        public virtual DbSet<Post> Posts { get; set; } = null!;
        public virtual DbSet<PostNominee> PostNominees { get; set; } = null!;
    }
}
