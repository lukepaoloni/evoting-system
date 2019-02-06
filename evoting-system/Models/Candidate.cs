using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace evotingsystem.Models
{
    public class Candidate
    {
        private String firstName,
                       lastName;

        private Constituency constituency;

        private Party party;

        public Candidate(String fistName,
                        String lastName,
                        Constituency constituency,
                        Party party)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.constituency = constituency;
            this.party = party;

        }

        public Constituency getConstituency()
        {
            return this.constituency;
        }

        public String getFirstName()
        {
            return this.firstName;
        }

        public String getLastName()
        {
            return this.lastName;
        }

        public void incrementVote()
        {
            //needs the Vote class committed
        }

        private Party getParty()
        {
            return this.party;
        }








    }
}
