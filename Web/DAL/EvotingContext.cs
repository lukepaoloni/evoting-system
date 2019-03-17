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

        public DbSet<AbstractUser> Users { get; set; }
        public DbSet<Votes> Votes { get; set; }
        public DbSet<Party> Parties { get; set; }
        public DbSet<Config> Config { get; set; }
        public DbSet<Constituency> Constituencies { get; set; }
        public DbSet<Candidate> Candidates { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Entity<AbstractUser>().ToTable("Users", "dbo");
        }

    }
}