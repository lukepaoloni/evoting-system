using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL;
using Web.Models;

namespace Web.Seeds
{
    public class ConsituencySeed
    {
        public static void Seed(EvotingContext context)
        {
            var constituencies = new List<Constituency>
            {
                new Constituency
                {
                    Name = "Bedford"
                }
            };

            constituencies.ForEach(c => context.Constituencies.Add(c));
        }
    }
}