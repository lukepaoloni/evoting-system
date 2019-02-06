using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace evotingsystem.Models
{
    public class Constituency
    {

        private String name;
        private Candidate electedCandidate;
        private ListOfCandidates listOfCandidates;

        //private List<Vote> numVotes; (needs vote class from Jake)

        
        public Constituency(String name)
        {
            this.name = name;    
        }

        public void electCandidate(Candidate candidate)
        {
            this.electedCandidate = candidate;   
        } 

        public String getName()
        {
            return this.name;
        }

        public Candidate getElectedCandidate()
        {
            return this.electedCandidate;
        }

        public ListOfCandidates getCandidates()
        {
            return this.listOfCandidates;
        }

        public void removeCandidate(Candidate candidate)
        {
            this.listOfCandidates.Remove(candidate);
        }

        public void addCandidate(Candidate candidate)
        {
            this.listOfCandidates.Add(candidate);
        }







    }
}
