using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Web.DAL.Factory;
using Web.Seeds;

namespace Web.DAL
{
    public class EvotingInitializer : DropCreateDatabaseAlways<EvotingContext>
    {
        protected override void Seed(EvotingContext context)
        {
            ConsituencySeed.Seed(context);
            VoterSeed.Seed(context);
            AdminSeed.Seed(context);
            PartySeed.Seed(context);
            CandidateSeed.Seed(context);
            ConfigSeed.Seed(context);
        }
    }
}