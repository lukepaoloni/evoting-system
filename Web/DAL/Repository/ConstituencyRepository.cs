using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Web.Models;

namespace Web.DAL.Repository
{
    public interface IConstituencyRepository
    {
        IQueryable<Constituency> GetAllConstituencies();
        Constituency GetConstituencyById(int id);
    }

    public class ConstituencyRepository : AbstractRepository<Constituency>, IConstituencyRepository
    {
        public ConstituencyRepository(EvotingContext context) : base(context)
        {
        }

        public IQueryable<Constituency> GetAllConstituencies()
        {
            return GetAll().Include("Candidates");
        }

        public Constituency GetConstituencyById(int id)
        {
            return GetById(id);
        }
    }
}