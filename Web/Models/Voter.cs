using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class Voter : AbstractUser
    {
        public static string ROLE = "voter";
        public int NumOfVote { get; set; } 

        public virtual Constituency Constituency { get; set; }
    }
}