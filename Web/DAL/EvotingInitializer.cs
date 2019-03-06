using System;
using Web.Models;
using System.Data.Entity;
using System.Collections.Generic;

namespace Web.DAL
{
    public class EvotingInitializer : DropCreateDatabaseIfModelChanges<EvotingContext>
    {
        protected override void Seed(EvotingContext context)
        {
            var voters = new List<Voter>
            {
                new Voter{ 
                    FirstName="John", 
                    LastName="Wick",
                    UserId="fdasfdsa",
                    Role="User",
                    IsLoggedIn=false,
                    NumOfVote=1,
                    Password="test",
                    Postcode="see"
                }
            };
        }
    }
}
