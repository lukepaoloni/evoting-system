using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EvotingSystem.Models
{
    public class Admin
    {
        private static object vote;

        public enum VoteType { Preferential, Transferable, FirstPass }

        public AdminAccount()
        {
        }

        public void ConfigureVote(VoteType type)
        {
            switch (type)
            {
                case VoteType.Preferential:
                    vote = new Preferential();
                    break;
                case VoteType.Transferable:
                    vote = new Transferable();
                    break;
                case VoteType.FirstPass:
                    vote = new FirstPass();
                    break;
            }
            Console.WriteLine(vote.ToString());
            Console.WriteLine("Called ConfigureVote");
        }

        public void GenerateResults()
        {
            Console.WriteLine("Called GenrateResults");
        }
    }
}