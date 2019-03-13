using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.Models;

namespace Web.DAL.Repository
{
    public interface IVoterRepository
    {
        IEnumerable<Voter> GetVoters();
        Voter GetVoterById(int voterId);
        void CreateVoter(Voter voter);
        void DeleteVoter(int voterId);
        void UpdateVoter(Voter voter);
        void Save();
    }

    public class VoterRepository : AbstractRepository<Voter>, IVoterRepository
    {
        public VoterRepository(EvotingContext context) : base(context)
        {

        }

        public void CreateVoter(Voter voter)
        {
            Create(voter);
        }

        public void DeleteVoter(int voterId)
        {
            Delete(voterId);
        }

        public Voter GetVoterById(int voterId)
        {
            return GetById(voterId);
        }

        public IEnumerable<Voter> GetVoters()
        {
            return GetAll();
        }

        public void UpdateVoter(Voter voter)
        {
            Update(voter);
        }
    }
}