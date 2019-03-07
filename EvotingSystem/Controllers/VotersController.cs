using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using EvotingSystem.Models;

namespace EvotingSystem.Controllers
{
    public class VotersController : Controller
    {
        private EvotingSystemContext db = new EvotingSystemContext();

        // GET: Voters
        public ActionResult Index()
        {
            return Json(db.Voters.ToList(), JsonRequestBehavior.AllowGet);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
