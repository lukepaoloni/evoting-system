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
            var candidateRepostiory = new CandidateRepository(context);

            for (var i = 1; i <= 5; i++)
            {
                // Get a voter
                var voter = voterRepository.GetVoterById(i);

                // Get the constituency the voter is registered to
                var constituency = voter.Constituency;

                // Reoccur for three votes
                for (var t = 0; t < Preferential.MAX_VOTES; t++)
                {
                    // Get a random candidate in the list of candidates
                    var candidates = candidateRepostiory.GetCandidatesByConstituency(constituency);
                    var candidate = candidates.ElementAt(Faker.RandomNumber.Next(1, candidates.Count()));

                    // Create a preferential vote
                    var vote = new VoterCandidate
                    {
                        Candidate = candidate,
                        Voter = voter,
                        Priority = (Priority) t
                    };
                    context.VoterCandidates.Add(vote);
                }
            }
            context.SaveChanges();
        }
    }
}