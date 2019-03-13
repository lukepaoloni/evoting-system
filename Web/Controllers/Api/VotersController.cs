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

namespace Web.Controllers.API
{
    public class VotersController : ApiController
    {
        private EvotingContext db = new EvotingContext();
        private IUserRepository userRepository;

        public VotersController()
        {
            this.userRepository = new UserRepository<Voter>(this.db);
        }

        // GET: api/Voters
        public IQueryable<Voter> GetVoters()
        {
            return this.userRepository.GetUsers();
        }

        // GET: api/Voters/5
        [ResponseType(typeof(Voter))]
        public IHttpActionResult GetVoter(int id)
        {
            Voter voter = db.Voters.Find(id);
            if (voter == null)
            {
                return NotFound();
            }

            return Ok(voter);
        }

        // PUT: api/Voters/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVoter(int id, Voter voter)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != voter.Id)
            {
                return BadRequest();
            }

            db.Entry(voter).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VoterExists(id))
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

        // POST: api/Voters
        [ResponseType(typeof(Voter))]
        public IHttpActionResult PostVoter(Voter voter)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Voters.Add(voter);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = voter.Id }, voter);
        }

        // DELETE: api/Voters/5
        [ResponseType(typeof(Voter))]
        public IHttpActionResult DeleteVoter(int id)
        {
            Voter voter = db.Voters.Find(id);
            if (voter == null)
            {
                return NotFound();
            }

            db.Voters.Remove(voter);
            db.SaveChanges();

            return Ok(voter);
        }

        private bool VoterExists(int id)
        {
            return db.Voters.Count(e => e.Id == id) > 0;
        }
    }
}