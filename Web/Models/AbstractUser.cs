using System;

namespace Web.Models
{
    public abstract class AbstractUser
    {
        private readonly string collection = "users";
        public string Id { get; }
        public string Role { get; set; }
        public string UserId { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsLoggedIn { get; set; }


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
