using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.Models;

namespace Web.DAL.Repository
{
    public interface IPartyRepository
    {
        ICollection<Party> GetAllParties();
        Party GetPartyById(int id);
    }

    public class PartyRepository : AbstractRepository<Party>, IPartyRepository
    {
        public PartyRepository(EvotingContext context) : base(context)
        {
        }

        public ICollection<Party> GetAllParties()
        {
            return GetAll().ToList();
        }

        public Party GetPartyById(int id)
        {
            return GetById(id);
        }
    }
}