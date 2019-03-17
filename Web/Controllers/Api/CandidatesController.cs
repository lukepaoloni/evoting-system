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
    public class CandidatesController : ApiController
    {
        private readonly EvotingContext _db = new EvotingContext();
        private readonly CandidateRepository _candidateRepository;

        public CandidatesController()
        {
            _candidateRepository = new CandidateRepository(_db);
        }

        // GET: api/Candidates
        public ICollection<Candidate> GetCandidates()
        {
            return _candidateRepository.GetCandidates();
        }

        // GET: api/Candidates/5
        [ResponseType(typeof(Candidate))]
        public IHttpActionResult GetCandidate(int id)
        {
            Candidate candidate = _db.Candidates.Find(id);
            if (candidate == null)
            {
                return NotFound();
            }

            return Ok(candidate);
        }

        // PUT: api/Candidates/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCandidate(int id, Candidate candidate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != candidate.Id)
            {
                return BadRequest();
            }

            _db.Entry(candidate).State = EntityState.Modified;

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidateExists(id))
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

        // POST: api/Candidates
        [ResponseType(typeof(Candidate))]
        public IHttpActionResult PostCandidate(Candidate candidate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Candidates.Add(candidate);
            _db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = candidate.Id }, candidate);
        }

        // DELETE: api/Candidates/5
        [ResponseType(typeof(Candidate))]
        public IHttpActionResult DeleteCandidate(int id)
        {
            Candidate candidate = _db.Candidates.Find(id);
            if (candidate == null)
            {
                return NotFound();
            }

            _db.Candidates.Remove(candidate);
            _db.SaveChanges();

            return Ok(candidate);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CandidateExists(int id)
        {
            return _db.Candidates.Count(e => e.Id == id) > 0;
        }
    }
}