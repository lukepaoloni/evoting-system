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
    public class VotesController : ApiController
    {
        private EvotingContext db = new EvotingContext();

        // GET: api/Votes
        public IEnumerable<Votes> GetVotes()
        {
            var results = db.Votes.ToList();
            return results;
        }

        // GET: api/Votes/5
        [ResponseType(typeof(Votes))]
        public IHttpActionResult GetVote(int id)
        {
            Votes voterCandidate = db.Votes.Find(id);
            if (voterCandidate == null)
            {
                return NotFound();
            }

            return Ok(voterCandidate);
        }

        // PUT: api/Votes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVote(int id, Votes vote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vote.Id)
            {
                return BadRequest();
            }

            db.Entry(vote).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VoteExists(id))
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

        // POST: api/Votes
        [ResponseType(typeof(Votes))]
        public IHttpActionResult PostVote(Votes vote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Votes.Add(vote);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = vote.Id }, vote);
        }

        // DELETE: api/Votes/5
        [ResponseType(typeof(Votes))]
        public IHttpActionResult DeleteVote(int id)
        {
            Votes vote = db.Votes.Find(id);
            if (vote == null)
            {
                return NotFound();
            }

            db.Votes.Remove(vote);
            db.SaveChanges();

            return Ok(vote);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VoteExists(int id)
        {
            return db.Votes.Count(e => e.Id == id) > 0;
        }
    }
}