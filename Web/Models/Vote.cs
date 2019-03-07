using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Web.Models
{
    public class Vote
    {
        [Key]
        public int VoteID { get; set; }
        public int VoteLimit { get; set; }

        public void SaveData()
        {

        }

        public void Apply()
        {

        }
    }
}