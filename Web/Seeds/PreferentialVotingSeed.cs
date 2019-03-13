﻿using System;
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
            var candidateRepository = new CandidateRepository(context);

            for (int i = 0; i < Preferential.Limit; i++)
            {
                Voter voter = voterRepository.GetVoterById(i);
                Candidate candidate = candidateRepository.GetCandidateById(i);
                VoterCandidate vote = new VoterCandidate
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