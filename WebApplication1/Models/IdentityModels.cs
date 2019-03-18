using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using WebApplication1.DAL;
namespace WebApplication1.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }
        public int NumOfVote { get; set; }
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }

        public static void Seed(ApplicationDbContext context)
        {
            IPasswordHasher password = null;
            var user = new ApplicationUser()
            {
                FirstName = "TestUser",
                LastName = "Test",
                Role = "1",
                UserName = "TestUser",
                PasswordHash = password.HashPassword("Password1."),
                TwoFactorEnabled = false,
                PhoneNumberConfirmed = false

            };
            context.Users.Add(user);
            context.SaveChanges();
        }
    }
        public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
        {
            public ApplicationDbContext()
                : base("DefaultConnection", throwIfV1Schema: false)
            {

            }
            protected override void OnModelCreating(DbModelBuilder modelBuilder)
            {
                
                base.OnModelCreating(modelBuilder);
                modelBuilder.Entity<ApplicationUser>().ToTable("Users");
            
            }
            public static ApplicationDbContext Create()
            {
                return new ApplicationDbContext();
            }
        }
    
}