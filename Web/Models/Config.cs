using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Web.DAL.Factory;

namespace Web.Models
{
    public class Config
    {
        [Key]
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public VoteType VoteType { get; set; }

        public Config(VoteType type)
        {
            VoteType = type;
        }
    }
    
}