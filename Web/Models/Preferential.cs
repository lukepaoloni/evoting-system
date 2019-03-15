using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Web;
using Web.DAL.Factory;

namespace Web.Models
{
    public class Preferential : Vote, IVoteType
    {
        public static new int MAX_VOTES = 3;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public new int Limit { get; }


        public void RemoveLastCandidate()
        {

        }

        public void ShareVote()
        {

        }

        //public override IVoteType Create(DateTime startDate, DateTime endDate)
        //{
        //    return new Preferential(startDate, endDate);
        //}

    }
}