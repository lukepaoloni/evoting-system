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

        public Party(String name,
                     String link,
                     String manifesto)
        {
            this.name = name;
            this.link = link;
            this.manifesto = manifesto;
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
