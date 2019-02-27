﻿using System;
namespace Web.Models
{
    public class Voter: AbstractUser
    {
        public int NumOfVote { get; set; }
        public string Postcode { get; set; }
        public Constituency Constituency { get; set; }

        public bool HasVoted()
        {
            return NumOfVote > 0;
        }
    }
}
