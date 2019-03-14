using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL;
using Web.DAL.Repository;
using Web.Models;

namespace Web.Seeds
{
    public class CandidateSeed
    {
        public static void Seed(EvotingContext context)
        {
            var count = 5;
            var candidates = new List<Candidate>();
            var constituencyRepository = new ConstituencyRepository(context);
            var partyRepository = new PartyRepository(context);


            for (var i = 1; i <= count; i++)
            {
                var constituency = constituencyRepository.GetConstituencyById(Faker.RandomNumber.Next(1, 5));
                var party = partyRepository.GetPartyById(Faker.RandomNumber.Next(1, 5));
                var candidate = new Candidate
                {
                    Constituency = constituency,
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    NumVotes = 0,
                    Party = party
                };
                candidates.Add(candidate);
            }

            candidates.ForEach(c => context.Candidates.Add(c));
            context.SaveChanges();
        }
    }
}