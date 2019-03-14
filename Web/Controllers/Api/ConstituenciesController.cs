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
    public class ConstituenciesController : ApiController
    {
        private readonly EvotingContext db = new EvotingContext();
        private readonly ConstituencyRepository _constituencyRepository;

        public ConstituenciesController()
        {
            _constituencyRepository = new ConstituencyRepository(db);
        }

        // GET: api/Constituencies
        public IQueryable<Constituency> GetConstituencies()
        {
            return _constituencyRepository.GetAllConstituencies();
        }

        // GET: api/Constituencies/5
        [ResponseType(typeof(Constituency))]
        public IHttpActionResult GetConstituency(int id)
        {
            var constituency = _constituencyRepository.GetConstituencyById(id);

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

            if (id != constituency.Id)
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

            _constituencyRepository.Create(constituency);
            _constituencyRepository.Save();

            return CreatedAtRoute("DefaultApi", new { id = constituency.Id }, constituency);
        }

        // DELETE: api/Constituencies/5
        [ResponseType(typeof(Constituency))]
        public IHttpActionResult DeleteConstituency(int id)
        {
            _constituencyRepository.Delete(id);
            _constituencyRepository.Save();

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

        private bool ConstituencyExists(int id)
        {
            return db.Constituencies.Count(e => e.Id == id) > 0;
        }
    }
}