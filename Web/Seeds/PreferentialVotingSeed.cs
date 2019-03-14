using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;
using Web.DAL;
using Web.DAL.Repository;
using Web.Models;

namespace Web.Seeds
{
    public class PreferentialVotingSeed
    {
        public static void Seed(EvotingContext context)
        {
            var voterRepository = new VoterRepository(context);

            // Get a voter
            var voter = voterRepository.GetVoterById(Faker.RandomNumber.Next(1, 5));
            
            // Reoccur for three votes
            for (int i = 0; i < Preferential.Limit; i++)
            {
                // Get the constituency the voter is registered to
                var constituency = voter.Constituency;

                // Get the candidates in the constituency
                var candidates = constituency.Candidates;

                // Get a random candidate in the list of candidates
                var candidate = candidates.ElementAt(Faker.RandomNumber.Next(1, 5));

                // Create a preferential vote
                var vote = new VoterCandidate
                {
                    Candidate = candidate,
                    Voter = voter,
                    Priority = (Priority) i
                };
                context.VoterCandidates.Add(vote);
            }
            context.SaveChanges();
        }
    }
}