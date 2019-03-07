using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Constituency
    {
        public String Name { get; set; }
        public Candidate ElectedCandidate { get; set; }

        public Constituency() { }

        public void electCandidate(Candidate candidate)
        {
            this.ElectedCandidate = candidate;
        }
    }
}