using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using EvotingSystem.Models;

namespace EvotingSystem.Seeds
{
    public class VoterSeed
    {
        public static void Seed(EvotingSystemContext context)
        {
            context.Voters.AddOrUpdate(
                x => x.Id,
                new Voter {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Password = "Test",
                    Role = "voter",
                    NumOfVote = 1,
                    Postcode = Faker.Address.UkPostCode()
                }, new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Password = "Test",
                    Role = "voter",
                    NumOfVote = 1,
                    Postcode = Faker.Address.UkPostCode()
                }, new Voter
                {
                    FirstName = Faker.Name.First(),
                    Password = "Test",
                    LastName = Faker.Name.Last(),
                    Role = "voter",
                    NumOfVote = 1,
                    Postcode = Faker.Address.UkPostCode()
                }
            );
        }
    }
}