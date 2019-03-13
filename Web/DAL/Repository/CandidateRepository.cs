using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.Models;

namespace Web.DAL.Repository
{
    public interface ICandidateRepository
    {
        IQueryable<Candidate> GetCandidates();
        Candidate GetCandidateById(int candidateId);
        void CreateCandidate(Candidate candidate);
        void DeleteCandidate(int candidateId);
        void UpdateCandidate(Candidate candidate);
        void Save();
    }

    public class CandidateRepository : AbstractRepository<Candidate>, ICandidateRepository
    {
        public CandidateRepository(EvotingContext context) : base(context)
        {

        }

        public IQueryable<Candidate> GetCandidates()
        {
            return GetAll();
        }

        public Candidate GetCandidateById(int candidateId)
        {
            return GetById(candidateId);
        }

        public void CreateCandidate(Candidate candidate)
        {
            Create(candidate);
        }

        public void DeleteCandidate(int candidateId)
        {
            Delete(candidateId);
        }

        public void UpdateCandidate(Candidate candidate)
        {
            Update(candidate);
        }
    }
}