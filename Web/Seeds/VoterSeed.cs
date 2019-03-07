using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL;
using Web.Models;

namespace Web.Seeds
{
    public class VoterSeed
    {
        public static void Seed(EvotingContext context)
        {
            var voters = new List<Voter>
            {
                new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Postcode = Faker.Address.UkPostCode(),
                    Role = "voter"
                },
                new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Postcode = Faker.Address.UkPostCode(),
                    Role = "voter"
                },
                new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Postcode = Faker.Address.UkPostCode(),
                    Role = "voter"
                },
                new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Postcode = Faker.Address.UkPostCode(),
                    Role = "voter"
                },
                new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Postcode = Faker.Address.UkPostCode(),
                    Role = "voter"
                }
            };

            voters.ForEach(v => context.Voters.Add(v));
            context.SaveChanges();
        }
    }
}