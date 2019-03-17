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
using Web.DAL.Repository;
using Web.Models;

namespace Web.Controllers.Api
{
    public class PartiesController : ApiController
    {
        private readonly EvotingContext _db = new EvotingContext();

        private readonly PartyRepository _partyRepository;

        public PartiesController()
        {
            _partyRepository = new PartyRepository(_db);
        }

        // GET: api/Parties
        public ICollection<Party> GetParties()
        {
            return _partyRepository.GetAllParties();
        }

        // GET: api/Parties/5
        [ResponseType(typeof(Party))]
        public IHttpActionResult GetParty(int id)
        {
            Party party = _db.Parties.Find(id);
            if (party == null)
            {
                return NotFound();
            }

            return Ok(party);
        }

        // PUT: api/Parties/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutParty(int id, Party party)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != party.Id)
            {
                return BadRequest();
            }

            _db.Entry(party).State = EntityState.Modified;

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PartyExists(id))
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

        // POST: api/Parties
        [ResponseType(typeof(Party))]
        public IHttpActionResult PostParty(Party party)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Parties.Add(party);
            _db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = party.Id }, party);
        }

        // DELETE: api/Parties/5
        [ResponseType(typeof(Party))]
        public IHttpActionResult DeleteParty(int id)
        {
            Party party = _db.Parties.Find(id);
            if (party == null)
            {
                return NotFound();
            }

            _db.Parties.Remove(party);
            _db.SaveChanges();

            return Ok(party);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PartyExists(int id)
        {
            return _db.Parties.Count(e => e.Id == id) > 0;
        }
    }
}