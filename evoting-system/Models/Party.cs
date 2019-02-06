using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace evotingsystem.Models
{
    public class Party
    {
        private String name;
        private String link;
        private String manifesto;

        public Party()
        {

        }

        public String getName()
        {
            return this.name;
        }

        public String getLink()
        {
            return this.link;
        }

        public String getManifesto()
        {
            return this.manifesto;
        }
    }
}
