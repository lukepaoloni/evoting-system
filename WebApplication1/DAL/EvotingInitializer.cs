using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using WebApplication1.Models;
using static WebApplication1.Models.ApplicationUser;
//using Web.Seeds;
namespace WebApplication1.DAL
{
    public class EvotingInitializer: DropCreateDatabaseAlways<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            ApplicationUser.Seed(context);
        }
    }
}