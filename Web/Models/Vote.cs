using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Web.DAL.Factory;

namespace Web.Models
{
    public abstract class Vote : VoteFactory
    {
        public static int Limit = 1;

        [Key]
        public int Id { get; set; }

        public void SaveData()
        {

        }

        public void Apply()
        {

        }
    }
}