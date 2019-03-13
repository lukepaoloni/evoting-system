using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Web.Models
{
    public abstract class Vote
    {
        public static int Limit = 1;

        [Key]
        public int VoteId { get; set; }

        public void SaveData()
        {

        }

        public void Apply()
        {

        }
    }
}