using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL;
using Web.DAL.Factory;
using Web.Models;

namespace Web.Seeds
{
    public class ConfigSeed
    {
        public static void Seed(EvotingContext context)
        {
            var now = DateTime.Now;
            var end = now.AddMonths(3);
            var config = new Config
            {
                StartDate = now,
                EndDate = end,
                VoteType = VoteType.Transferable
            };
            context.Config.Add(config);
            context.SaveChanges();

            switch (config.VoteType)
            {
                //case VoteType.FirstPass:
                //  FirstPastVotingSeed.Seed(context);
                //  break;
                case VoteType.Preferential:
                    PreferentialVotingSeed.Seed(context);
                    break;
                case VoteType.Transferable:
                    TransferableVotingSeed.Seed(context);
                    break;
                default:
                    throw new NotImplementedException();
            }
        }
    }
}