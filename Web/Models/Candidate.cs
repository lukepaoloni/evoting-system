using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;

namespace Web.Models
{

    public class Candidate
    {
        [Key, ForeignKey("Constituency")]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual Constituency Constituency { get; set; }
        public Party Party { get; set; }
        public int NumVotes { get; set; }
        public bool IsElected { get; set; }

        public Candidate()
        {
            IsElected = false;
        }

        public void incrementVote()
        {
            this.NumVotes++;
        }
    }
}