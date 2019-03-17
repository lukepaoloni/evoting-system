using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL;
using Web.DAL.Repository;
using Web.Models;

namespace Web.Seeds
{
    public class TransferableVotingSeed
    {
        public static void Seed(EvotingContext context)
        {
            var voterRepository = new VoterRepository(context);
            var candidateRepository = new CandidateRepository(context);

            for (var i = 1; i <= 5; i++)
            {
                // Get a voter
                var voter = voterRepository.GetVoterById(i);

                // Get the constituency the voter is registered to
                var constituency = voter.Constituency;

                for (var t = 0; t < Transferable.MAX_VOTES; t++)
                {
                    // Get a random candidate in the list of candidates
                    var candidates = candidateRepository.GetCandidatesByConstituency(constituency);
                    var candidate = candidates.ElementAt(Faker.RandomNumber.Next(1, candidates.Count()));

                    // Create a preferential vote
                    var vote = new Votes
                    {
                        Candidate = candidate,
                        Voter = voter,
                        Priority = (Priority)t
                    };
                    context.Votes.Add(vote);
                }
            }
            context.SaveChanges();
        }
    }
}