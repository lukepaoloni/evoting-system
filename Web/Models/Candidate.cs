using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models
{

    public class Candidate
    {
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public Constituency Constituency { get; set; }
        public Party Party { get; set; }
        public int Id { get; set; }
        public int NumVotes { get; set; }

        public Candidate() { }

        public void incrementVote()
        {
            this.NumVotes++;
        }
    }
}