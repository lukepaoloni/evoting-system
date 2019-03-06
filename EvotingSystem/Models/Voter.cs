using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EvotingSystem.Models
{
    public class Voter// : abstractUser
    {
        public int NumOfVote { get; set; }
        public string Postcode { get; set; }
        //public Constituency Constituency { get; set; }

        public bool HasVoted()
        {
            return NumOfVote > 0;
        }
    }
}