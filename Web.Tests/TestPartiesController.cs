using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Web.Controllers.Api;

namespace Web.Tests
{
    [TestClass]
    public class TestPartiesController
    {
        private PartiesController controller = new PartiesController();
        [TestMethod]
        public void GetAllReturnsAllParties()
        {
            var results = controller.GetParties();
            Assert.IsNotNull(results);
            Assert.AreEqual(7, results.Count());
        }

        [TestMethod]
        public void GetOneParty()
        {
            var results = controller.GetParty(1);
            Assert.IsNotNull(results);
        }
    }
}
