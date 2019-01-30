using System;
using Firebase.Database;
using Firebase.Database.Query;

namespace evotingsystem.Models
{
    public class User
    {
        public string name;

        public async void addUser()
        {
            var firebase = new FirebaseClient("https://evoting-b3620.firebaseio.com/");
            var user = await firebase.Child("users").PostAsync(this);
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
