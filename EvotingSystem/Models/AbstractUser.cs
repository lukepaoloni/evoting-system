using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;

namespace EvotingSystem.Models
{
    public class AbstractUser
    {
        [Key]
        public string Id { get; set; }
        public string Role { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool? IsLoggedIn { get; set; }


        //this is shezan, i am testing if the unit testing is working
        public bool IsPrime(int candidate)
        {
            if (candidate == 1)
            {
                return true;
            }
            throw new NotImplementedException("Please create a test first");
        }
    }
}