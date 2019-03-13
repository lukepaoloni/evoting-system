using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Web.DAL;
using Web.Models;
using Web.DAL.Repository;

namespace Web.Controllers.Api
{
    public class AdminsController : ApiController
    {
        private EvotingContext db = new EvotingContext();
        private AdminRepository _adminRepository;

        public AdminsController()
        {
            _adminRepository = new AdminRepository(db);
        }

        // GET: api/Admins
        public IQueryable<Admin> GetAdmins()
        {
            return _adminRepository.GetAdmins();
        }

        // GET: api/Admins/5
        [ResponseType(typeof(Admin))]
        public IHttpActionResult GetAdmin(int id)
        {
            Admin admin = _adminRepository.GetAdminById(id);

            if (admin == null)
            {
                return NotFound();
            }

            return Ok(admin);
        }

        // PUT: api/Admins/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAdmin(int id, Admin admin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != admin.Id)
            {
                return BadRequest();
            }

            db.Entry(admin).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Admins
        [ResponseType(typeof(Admin))]
        public IHttpActionResult PostAdmin(Admin admin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _adminRepository.CreateAdmin(admin);
            _adminRepository.Save();

            return CreatedAtRoute("DefaultApi", new { id = admin.Id }, admin);
        }

        // DELETE: api/Admins/5
        [ResponseType(typeof(Admin))]
        public IHttpActionResult DeleteAdmin(int id)
        {
            _adminRepository.DeleteAdmin(id);
            _adminRepository.Save();
            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AdminExists(int id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}