using System;
using Xunit;
using evotingsystem.Models;

namespace Evoting.Tests
{
    public class UnitTest1
    {   // User is the target class, find this class in models folder
    	private readonly AdminAccount _primeService;
        public UnitTest1()
        {
            _primeService = new AdminAccount();
        }

        [Fact]
        public void ReturnFalseGivenValueOf1()
        { 
            var result = _primeService.IsPrime(1);

            //assert.true means if the {result} value is true we passed the test
            Assert.True(result, "1 should not be prime");
        }
    }
}

/* NOTE
 * To run unit rest open cmd go to {..\evoting-system\Evoting.Tests} 
 * run <dotnet tests>
 */
