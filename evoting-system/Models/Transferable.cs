﻿using System;
<<<<<<< Updated upstream
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace evotingsystem.Models
{
    public class Transferable : Vote
    {
        private int Quota { get; set; }
        private int NumberOfSeatRemaining { get; set; }
        private bool FirstPref { get; set; }
        private bool SecondPref { get; set; }
        private bool ThirdPref { get; set; }

        public bool HasQuotaReached()
        {
            return (Quota >= NumberOfSeatRemaining);
        }

        public void RemoveLastCandidate()
        {

=======
namespace evotingsystem.Models
{
    public class Transferable
    {
        public Transferable()
        {
>>>>>>> Stashed changes
        }
    }
}
