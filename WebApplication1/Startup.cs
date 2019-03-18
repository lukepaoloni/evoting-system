using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Owin;
using WebApplication1.Models;

[assembly: OwinStartupAttribute(typeof(WebApplication1.Startup))]
namespace WebApplication1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            
            //if (userManager.FindByNameAsync("test").Result == null)
            //    {
            //        //IPasswordHasher password = null;
            //        var user = new ApplicationUser()
            //        {
            //            FirstName = "TestUser",
            //            LastName = "Test",
            //            Role = "1",
            //            UserName = "TestUser",
            //            TwoFactorEnabled = false,
            //            PhoneNumberConfirmed = false
            //        };

            //        IdentityResult result = userManager.CreateAsync(user, "Password1.").Result;
            //        if (result.Succeeded)
            //        {
            //            userManager.AddToRoleAsync(user.Id,
            //                                "1").Wait();
            //        }

            //    }
            
        }
    }
}
