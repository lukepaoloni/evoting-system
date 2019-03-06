using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models
{
    public class Constituency
    {

        public String Name { get; set; }
        public Candidate ElectedCandidate { get; set; }
        //public ListOfCandidates ListOfCandidates { get; set; }

        public Constituency() { }

        public void electCandidate(Candidate candidate)
        {
            this.ElectedCandidate = candidate;
        }
    }
}
