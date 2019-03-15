using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class Constituency
    {
        [Key]
        public int Id { get; set; }
        public String Name { get; set; }
        public virtual Candidate ElectedCandidate { get; set; }
    }
}