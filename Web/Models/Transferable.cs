using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL.Factory;

namespace Web.Models
{ 
    public class Transferable : Vote , IVoteType
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Limit { get; }
        public VoteType VoteType { get; set; }

        private int Quota { get; set; }
        private int NumberOfSeatRemaining { get; set; }

        public bool HasQuotaReached() 
        {
            return (Quota >= NumberOfSeatRemaining);
        }

        public void RemoveLastCandidate()
        {

        }

        //public override IVoteType Create(DateTime startDate, DateTime endDate)
        //{
        //    return new Transferable();
        //}
    }
}