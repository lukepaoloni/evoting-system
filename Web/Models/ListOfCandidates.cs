using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models
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
            //UnitTest2
            ListOfCandidates foundList = new ListOfCandidates();

            //foundList = 
            //    (ListOfCandidates)FindAll(x => (x.FirstName == firstName) && (x.LastName == lastName));

            foreach (Candidate candidate in this)
            {
                if (candidate.FirstName == firstName && candidate.LastName == lastName)
                {
                    foundList.Add(candidate);
                }
            }

            return foundList;
        }

        public Candidate findCandidateByID(int id)
        {
            //UnitTest3
            Candidate foundCandidate = new Candidate();

            foundCandidate = this.Find(x => x.Id == id);

            return foundCandidate;
        }



    }
}
