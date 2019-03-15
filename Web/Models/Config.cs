using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL.Factory;

namespace Web.Models
{
    public class Config
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public VoteType VoteType { get; set; }

        public Config(VoteType type)
        {
            VoteType = type;
        }
    }
    
}