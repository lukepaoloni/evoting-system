using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace evotingsystem.Models
{
    public class ListOfCandidates:List<Candidate>
    {
        public ListOfCandidates() { }

        public void addCandidate(Candidate candidate)
        {
            this.Add(candidate);
        }

        public void removeCandidate(Candidate candidate)
        {
            this.Remove(candidate);
        }

        public ListOfCandidates findCandidatesByName(String firstName,
                                                   String lastName)
        {
            //needs implementing -HW
            ListOfCandidates searchList = new ListOfCandidates();

            //searchList = this.Find(x => (x.FirstName == firstName) && (x.LastName == lastName));

            return new ListOfCandidates();
        }

        public Candidate findCandidateByID(int id)
        {
            Candidate foundCandidate = new Candidate();

            foundCandidate = this.Find(x => x.Id == id);

            return foundCandidate;
        }



    }
}
