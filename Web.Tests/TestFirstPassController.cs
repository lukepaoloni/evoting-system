using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Web.Controllers.Api;

namespace Web.Tests
{
    [TestClass]
    class TestFirstPassController
    {
        private readonly VotesController _controller = new VotesController();

        [TestMethod]
        public void GetAllVotes_ShouldReturnAllVoters()
        {
            // https://docs.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/mocking-entity-framework-when-unit-testing-aspnet-web-api-2
            var result = _controller.GetVoterCandidates();
            Assert.IsNotNull(result);
            Assert.AreEqual(5, result.Count());
        }
    }
}
