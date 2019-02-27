using System;
using System.Collections.Generic;

namespace evotingsystem.Models
{
    public class Vote
    {
        private int VoteLimit { get; set; }

        public void SaveData()
        {
            Console.WriteLine("vote ++ for candidate(s)");
        }

        public void Apply()
        {
        
        }
    }
}
