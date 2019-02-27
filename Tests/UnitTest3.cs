using System;
using Xunit;
using Web.Models;

namespace Evoting.Tests
{
    public class UnitTest3
    {   // Testing the findCandidatesById() function from ListOfCandidates
        private readonly ListOfCandidates _primeService;
        public UnitTest3()
        {
            _primeService = new ListOfCandidates();

            Candidate candidate1 = new Candidate();

            candidate1.Id = 9999;

            _primeService.addCandidate(candidate1);
        }

        [Fact]
        public void ReturnFalseGivenValueOf1()
        {
            var candidate = _primeService.findCandidateByID(9999);

            var result = candidate != null;
            //True
            Assert.True(result, "Candidate found within the list usng Id");
        }
    }
}

/* NOTE
 * To run unit rest open cmd go to {..\evoting-system\Evoting.Tests} 
 * run <dotnet test>
 */
