using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.Models;

namespace Web.DAL.Repository
{
    public interface ICandidateRepository
    {
        ICollection<Candidate> GetCandidates();
        Candidate GetCandidateById(int candidateId);
        void CreateCandidate(Candidate candidate);
        void DeleteCandidate(int candidateId);
        void UpdateCandidate(Candidate candidate);
    }

    public class CandidateRepository : AbstractRepository<Candidate>, ICandidateRepository
    {
        public CandidateRepository(EvotingContext context) : base(context)
        {

        }

        public ICollection<Candidate> GetCandidates()
        {
            return Context.Candidates.ToList();
        }

        public Candidate GetCandidateById(int candidateId)
        {
            return GetById(candidateId);
        }

        public void CreateCandidate(Candidate candidate)
        {
            Create(candidate);
        }

        public ICollection<Candidate> GetCandidatesByConstituency(Constituency constituency)
        {
            return Context.Candidates.ToList();
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