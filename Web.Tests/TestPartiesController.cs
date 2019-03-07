using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Web.Controllers.Api;

namespace Web.Tests
{
    [TestClass]
    public class TestPartiesController
    {
        [TestMethod]
        public void GetAllReturnsAllParties()
        {
            var controller = new PartiesController();
            var results = controller.GetParties();
            Assert.IsNotNull(results);
            Assert.AreEqual(7, results.Count());
        }

        [TestMethod]
        public void GetOneParty()
        {
            var controller = new PartiesController();
            var results = controller.GetParty(1);
            Assert.IsNotNull(results);
        }
    }
}
