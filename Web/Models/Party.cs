using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class Party
    {
        [Key]
        public int Partyid { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public IEnumerable<string> Manifesto { get; set; } 
    }
}