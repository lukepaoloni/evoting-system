using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.Models
{

    public class Candidate
    {
        [Key]
        public int Id { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public virtual Constituency Constituency { get; set; }
        public Party Party { get; set; }
        public int NumVotes { get; set; }

        public Candidate() { }

        public void incrementVote()
        {
            this.NumVotes++;
        }
    }
}