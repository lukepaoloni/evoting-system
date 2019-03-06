using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using Web.DAL;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        private EvotingContext db = new EvotingContext();

        public ActionResult Index()
        {
            return View(db.Voters.ToList());
        }
    }
}
