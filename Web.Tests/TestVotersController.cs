using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Web.Controllers.API;
using Web.Models;

namespace Web.Tests
{
    [TestClass]
    public class TestVotersController
    {
        private readonly VotersController _controller = new VotersController();

        [TestMethod]
        public void GetAllVoters_ShouldReturnAllVoters()
        {
            // https://docs.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/mocking-entity-framework-when-unit-testing-aspnet-web-api-2
            var result = _controller.GetVoters();
            Assert.IsNotNull(result);
            Assert.AreEqual(5, result.Count());
        }
    }
}
