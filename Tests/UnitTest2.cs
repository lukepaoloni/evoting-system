using System;
using Xunit;
using Web.Models;

namespace Evoting.Tests
{
    public class UnitTest2
    {   // Testing the findCandidatesByName() function from ListOfCandidates
        private readonly ListOfCandidates _primeService;
        public UnitTest2()
        {
            _primeService = new ListOfCandidates();

            Candidate candidate1 = new Candidate();

            candidate1.FirstName = "Bob";
            candidate1.LastName = "Cracker";

            _primeService.addCandidate(candidate1);
        }

        [Fact]
        public void ReturnFalseGivenValueOf1()
        {
            var list = _primeService.findCandidatesByName("Bob", "Cracker");

            var result = list.Count > 0;
            //True
            Assert.True(result, "Candidate found within the list usng First and LastName");
        }
    }
}

/* NOTE
 * To run unit rest open cmd go to {..\evoting-system\Evoting.Tests} 
 * run <dotnet test>
 */
