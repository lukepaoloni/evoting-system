﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class Constituency
    {
        [Key]
        public int Id { get; set; }
        public String Name { get; set; }
        public Candidate ElectedCandidate { get; set; }
    }
}