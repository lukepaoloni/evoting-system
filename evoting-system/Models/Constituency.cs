using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace evotingsystem.Models
{
    public class Constituency
    {

        public String Name { get; set; }
        public Candidate ElectedCandidate { get; set; }
        public ListOfCandidates ListOfCandidates { get; set; }

        //private List<Vote> numVotes;

        public Constituency() { }

        public void electCandidate(Candidate candidate)
        {
            this.ElectedCandidate = candidate;   
        } 

        public void removeCandidate(Candidate candidate)
        {
            this.ListOfCandidates.Remove(candidate);
        }

        public void addCandidate(Candidate candidate)
        {
            this.ListOfCandidates.Add(candidate);
        }
    }
}
