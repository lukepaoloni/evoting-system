﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL.Factory;

namespace Web.Models
{
    public class FirstPass : Vote , IVoteType
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Limit { get; }

        //public override IVoteType Create(DateTime startDate, DateTime endDate)
        //{
        //    return new FirstPass(startDate, endDate);
        //}
    }
}