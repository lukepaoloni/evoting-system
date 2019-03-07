using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Voter : AbstractUser
    {
        public int NumOfVote { get; set; }
        public string Postcode { get; set; }
    }
}