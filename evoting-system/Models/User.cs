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
    }
}
