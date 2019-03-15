using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Web.Controllers.Api;

namespace Web.Tests
{
    [TestClass]
    public class TestAdminsController
    {
        private readonly AdminsController _controller = new AdminsController();

        [TestMethod]
        public void GetAllAdmins_ShouldReturnAllAdmins()
        {
            var result = _controller.GetAdmins();
            Assert.IsNotNull(result);
            Assert.AreEqual(5, result.Count());
        }
    }
}
