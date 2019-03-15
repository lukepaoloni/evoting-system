﻿using System;
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
    public class VoterCandidatesController : ApiController
    {
        private EvotingContext db = new EvotingContext();

        // GET: api/VoterCandidates
        public IQueryable<VoterCandidate> GetVoterCandidates()
        {
            return db.VoterCandidates;
        }

        // GET: api/VoterCandidates/5
        [ResponseType(typeof(VoterCandidate))]
        public IHttpActionResult GetVoterCandidate(int id)
        {
            VoterCandidate voterCandidate = db.VoterCandidates.Find(id);
            if (voterCandidate == null)
            {
                return NotFound();
            }

            return Ok(voterCandidate);
        }

        // PUT: api/VoterCandidates/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVoterCandidate(int id, VoterCandidate voterCandidate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != voterCandidate.Id)
            {
                return BadRequest();
            }

            db.Entry(voterCandidate).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VoterCandidateExists(id))
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

        // POST: api/VoterCandidates
        [ResponseType(typeof(VoterCandidate))]
        public IHttpActionResult PostVoterCandidate(VoterCandidate voterCandidate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.VoterCandidates.Add(voterCandidate);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = voterCandidate.Id }, voterCandidate);
        }

        // DELETE: api/VoterCandidates/5
        [ResponseType(typeof(VoterCandidate))]
        public IHttpActionResult DeleteVoterCandidate(int id)
        {
            VoterCandidate voterCandidate = db.VoterCandidates.Find(id);
            if (voterCandidate == null)
            {
                return NotFound();
            }

            db.VoterCandidates.Remove(voterCandidate);
            db.SaveChanges();

            return Ok(voterCandidate);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VoterCandidateExists(int id)
        {
            return db.VoterCandidates.Count(e => e.Id == id) > 0;
        }
    }
}