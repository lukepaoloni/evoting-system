using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class Voter : AbstractUser
    {
        public static string ROLE = "voter";
        public int NumOfVote { get; set; }

        public Constituency Constituency { get; set; }
    }
}