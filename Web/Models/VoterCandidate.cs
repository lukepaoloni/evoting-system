using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public enum Priority { FirstPass, SecondPass, ThirdPass }
    public class VoterCandidate
    {
        [Key]
        public int Id { get; set; }
        public Voter Voter { get; set; }
        public Candidate Candidate { get; set; }
        public Priority? Priority { get; set; }
    }
}