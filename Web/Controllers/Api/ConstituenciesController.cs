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

namespace Web.Controllers.Api
{
    public class ConstituenciesController : ApiController
    {
        private EvotingContext db = new EvotingContext();

        // GET: api/Constituencies
        public IQueryable<Constituency> GetConstituencies()
        {
            return db.Constituencies;
        }

        // GET: api/Constituencies/5
        [ResponseType(typeof(Constituency))]
        public IHttpActionResult GetConstituency(int id)
        {
            Constituency constituency = db.Constituencies.Find(id);
            if (constituency == null)
            {
                return NotFound();
            }

            return Ok(constituency);
        }

        // PUT: api/Constituencies/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutConstituency(int id, Constituency constituency)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != constituency.Constituencyid)
            {
                return BadRequest();
            }

            db.Entry(constituency).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConstituencyExists(id))
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

        // POST: api/Constituencies
        [ResponseType(typeof(Constituency))]
        public IHttpActionResult PostConstituency(Constituency constituency)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Constituencies.Add(constituency);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = constituency.Constituencyid }, constituency);
        }

        // DELETE: api/Constituencies/5
        [ResponseType(typeof(Constituency))]
        public IHttpActionResult DeleteConstituency(int id)
        {
            Constituency constituency = db.Constituencies.Find(id);
            if (constituency == null)
            {
                return NotFound();
            }

            db.Constituencies.Remove(constituency);
            db.SaveChanges();

            return Ok(constituency);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ConstituencyExists(int id)
        {
            return db.Constituencies.Count(e => e.Constituencyid == id) > 0;
        }
    }
}