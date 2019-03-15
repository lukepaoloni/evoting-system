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
            var config = new List<Config>
            {
                new Config(VoteType.FirstPass)
                {
                    StartDate = DateTime.Now,
                    EndDate = DateTime.MaxValue
                }
            };
            config.ForEach(a => context.Config.Add(a));
            context.SaveChanges();
        }
    }
}