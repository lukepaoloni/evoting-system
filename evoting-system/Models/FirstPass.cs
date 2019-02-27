using System.Linq;
using Microsoft.EntityFrameworkCore.Storage;
using NUnit.Framework.Internal;

namespace evotingsystem.Models
{
    public class FirstPass : Vote
    {

        public ListOfCandidates FindCandidateWithMostVotes(ListOfCandidates cons)
        {
           cons.Sort();
           return cons;
        }
    }
}
