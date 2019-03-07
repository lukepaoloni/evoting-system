using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class Preferential : Vote
    {
        private int FirstPass { get; set; }
        private int SecondPass { get; set; }
        private int ThirdPass { get; set; }

        public void RemoveLastCandidate()
        {

        }

        public void ShareVote()
        {

        }

    }
}