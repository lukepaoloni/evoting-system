using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Web.Seeds;

namespace Web.DAL
{
    public class EvotingInitializer : DropCreateDatabaseIfModelChanges<EvotingContext>
    {
        protected override void Seed(EvotingContext context)
        {
            VoterSeed.Seed(context);
        }
    }
}