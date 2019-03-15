using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Web.Models;

namespace Web.DAL
{
    public class EvotingContext : DbContext
    {
        public EvotingContext() : base("EvotingContext")
        {
            
        }

        public DbSet<Voter> Voters { get; set; }
        public DbSet<Preferential> Preferentials { get; set; }
        public DbSet<Party> Parties { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Config> Config { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

    }
}