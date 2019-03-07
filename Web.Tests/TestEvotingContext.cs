using System;
using System.Text;
using System.Collections.Generic;
using System.Data.Entity;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Web.DAL;
using Web.Models;

namespace Web.Tests
{
    /// <summary>
    /// Summary description for TestEvotingContext
    /// </summary>
    [TestClass]
    public class TestEvotingContext : EvotingContext
    {
        public TestEvotingContext()
        {
            this.Voters = new TestVoterDbSet();
        }

        public DbSet<Voter> Voter { get; set; }

        public void Dispose() { }
    }
}
