using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Party
    {
        public String Name { get; set; }
        public String Link { get; set; }
        public String Manifesto { get; set; } 

        public Party() { }
    }
}