using System;
using Firebase.Database;
using Firebase.Database.Query;

namespace evotingsystem.Models
{
    public abstract class AbstractUser
    {
        private readonly string Collection = "users";
        public string Role { get; set; }
        public string Id { get; }
        public string UserId { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsLoggedIn { get; set; }

        public async void AddUser()
        {
            var firebase = new FirebaseClient("https://evoting-b3620.firebaseio.com/");
            var user = await firebase.Child(this.Collection).PostAsync(this);
        }

        //this is shezan, i am testing if the unit testing is working
        public bool IsPrime(int candidate)
        {
        	if(candidate == 1)
        	{
                return true;
        	}
            throw new NotImplementedException("Please create a test first");
        }
    }
}
