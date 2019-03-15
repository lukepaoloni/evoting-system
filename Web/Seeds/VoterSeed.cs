using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL;
using Web.Models;
using Web.DAL.Repository;

namespace Web.Seeds
{
    public class VoterSeed
    {
        public static void Seed(EvotingContext context)
        {
            var constituencyRepository = new ConstituencyRepository(context);
            var voters = new List<Voter>
            {
                new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Username = Faker.Internet.UserName(),
                    Role = Voter.ROLE,
                    Password = "password",
                    Constituency = constituencyRepository.GetConstituencyById(Faker.RandomNumber.Next(1, 5))
                },
                new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Username = Faker.Internet.UserName(),
                    Role = Voter.ROLE,
                    Password = "password",
                    Constituency = constituencyRepository.GetConstituencyById(Faker.RandomNumber.Next(1, 5))
                },
                new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Username = Faker.Internet.UserName(),
                    Role = Voter.ROLE,
                    Password = "password",
                    Constituency = constituencyRepository.GetConstituencyById(Faker.RandomNumber.Next(1, 5))
                },
                new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Username = Faker.Internet.UserName(),
                    Role = Voter.ROLE,
                    Password = "password",
                    Constituency = constituencyRepository.GetConstituencyById(Faker.RandomNumber.Next(1, 5))
                },
                new Voter
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Username = Faker.Internet.UserName(),
                    Role = Voter.ROLE,
                    Password = "password",
                    Constituency = constituencyRepository.GetConstituencyById(Faker.RandomNumber.Next(1, 5))
                }
            };

            voters.ForEach(v => context.Users.Add(v));
            context.SaveChanges();
        }
    }
}