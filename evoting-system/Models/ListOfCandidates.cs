using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace evotingsystem.Models
{
    public class ListOfCandidates:List<Candidate>
    {
        public ListOfCandidates()
        {

        }

        public void addCandidate(Candidate candidate)
        {
            this.Add(candidate);
        }

    }
}
