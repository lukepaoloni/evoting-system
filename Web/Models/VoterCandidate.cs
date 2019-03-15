using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public enum Priority { Low, Medium, High }
    public class VoterCandidate
    {
        [Key]
        public int Id { get; set; }
        public virtual Voter Voter { get; set; }
        public virtual Candidate Candidate { get; set; }
        public Priority? Priority { get; set; }
    }
}