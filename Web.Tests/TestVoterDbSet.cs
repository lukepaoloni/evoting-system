using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Web.Models;

namespace Web.Tests
{
    /// <summary>
    /// Summary description for TestEvotingDbSet
    /// </summary>
    [TestClass]
    public class TestVoterDbSet : TestDbSet<Voter>
    {
        public override Voter Find(params object[] keyValues)
        {
            return this.SingleOrDefault(voter => voter.Id == (int) keyValues.Single());
        }
    }
}
