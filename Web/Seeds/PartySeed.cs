using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL;
using Web.Models;

namespace Web.Seeds
{
    public class PartySeed
    {
        public static void Seed(EvotingContext context)
        {
            var parties = new List<Party>
            {
                new Party
                {
                    Name = "Conservative and Unionist Party",
                    Link = "https://www.conservatives.com",
                    Manifesto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor tellus, hendrerit id massa lobortis, facilisis tempus est. Integer congue euismod sapien consectetur faucibus. Morbi luctus consequat nulla, at " +
                                "porttitor dolor vulputate nec. Proin dapibus sed odio in mollis. Morbi in leo maximus, porta nisi vel, pellentesque elit. " +
                                "Ut et purus dui. Vivamus posuere, diam non cursus tempor, tortor magna tempus est, sed semper lectus turpis eget turpis. Integer in ligula odio. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus" +
                                " et malesuada fames ac turpis egestas. Vestibulum a ipsum lorem. Fusce ut iaculis mauris. Quisque metus diam, ullamcorper in tellus ut, lacinia sollicitudin enim. Pellentesque nec lacus nulla."
                },
                new Party
                {
                    Name = "Labour Party",
                    Link = "https://www.LabourParty.com",
                    Manifesto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor tellus, hendrerit id massa lobortis, facilisis tempus est. Integer congue euismod sapien consectetur faucibus. Morbi luctus consequat nulla, at " +
                                "porttitor dolor vulputate nec. Proin dapibus sed odio in mollis. Morbi in leo maximus, porta nisi vel, pellentesque elit. " +
                                "Ut et purus dui. Vivamus posuere, diam non cursus tempor, tortor magna tempus est, sed semper lectus turpis eget turpis. Integer in ligula odio. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus" +
                                " et malesuada fames ac turpis egestas. Vestibulum a ipsum lorem. Fusce ut iaculis mauris. Quisque metus diam, ullamcorper in tellus ut, lacinia sollicitudin enim. Pellentesque nec lacus nulla."
                },
                new Party
                {
                    Name = "Scottish National Party	",
                    Link = "https://www.snp.org",
                    Manifesto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor tellus, hendrerit id massa lobortis, facilisis tempus est. Integer congue euismod sapien consectetur faucibus. Morbi luctus consequat nulla, at " +
                                "porttitor dolor vulputate nec. Proin dapibus sed odio in mollis. Morbi in leo maximus, porta nisi vel, pellentesque elit. " +
                                "Ut et purus dui. Vivamus posuere, diam non cursus tempor, tortor magna tempus est, sed semper lectus turpis eget turpis. Integer in ligula odio. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus" +
                                " et malesuada fames ac turpis egestas. Vestibulum a ipsum lorem. Fusce ut iaculis mauris. Quisque metus diam, ullamcorper in tellus ut, lacinia sollicitudin enim. Pellentesque nec lacus nulla."
                },
                new Party
                {
                    Name = "Liberal Democrats",
                    Link = "https://www.libdems.org.uk/",
                    Manifesto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor tellus, hendrerit id massa lobortis, facilisis tempus est. Integer congue euismod sapien consectetur faucibus. Morbi luctus consequat nulla, at " +
                                "porttitor dolor vulputate nec. Proin dapibus sed odio in mollis. Morbi in leo maximus, porta nisi vel, pellentesque elit. " +
                                "Ut et purus dui. Vivamus posuere, diam non cursus tempor, tortor magna tempus est, sed semper lectus turpis eget turpis. Integer in ligula odio. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus" +
                                " et malesuada fames ac turpis egestas. Vestibulum a ipsum lorem. Fusce ut iaculis mauris. Quisque metus diam, ullamcorper in tellus ut, lacinia sollicitudin enim. Pellentesque nec lacus nulla."
                },
                new Party
                {
                    Name = "Democratic Unionist Party",
                    Link = "www.mydup.com/",
                    Manifesto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor tellus, hendrerit id massa lobortis, facilisis tempus est. Integer congue euismod sapien consectetur faucibus. Morbi luctus consequat nulla, at " +
                                "porttitor dolor vulputate nec. Proin dapibus sed odio in mollis. Morbi in leo maximus, porta nisi vel, pellentesque elit. " +
                                "Ut et purus dui. Vivamus posuere, diam non cursus tempor, tortor magna tempus est, sed semper lectus turpis eget turpis. Integer in ligula odio. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus" +
                                " et malesuada fames ac turpis egestas. Vestibulum a ipsum lorem. Fusce ut iaculis mauris. Quisque metus diam, ullamcorper in tellus ut, lacinia sollicitudin enim. Pellentesque nec lacus nulla."
                },
                new Party
                {
                    Name = Faker.Name.Last(),
                    Link = "",
                    Manifesto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor tellus, hendrerit id massa lobortis, facilisis tempus est. Integer congue euismod sapien consectetur faucibus. Morbi luctus consequat nulla, at " +
                                "porttitor dolor vulputate nec. Proin dapibus sed odio in mollis. Morbi in leo maximus, porta nisi vel, pellentesque elit. " +
                                "Ut et purus dui. Vivamus posuere, diam non cursus tempor, tortor magna tempus est, sed semper lectus turpis eget turpis. Integer in ligula odio. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus" +
                                " et malesuada fames ac turpis egestas. Vestibulum a ipsum lorem. Fusce ut iaculis mauris. Quisque metus diam, ullamcorper in tellus ut, lacinia sollicitudin enim. Pellentesque nec lacus nulla."
                },
                new Party
                {
                    Name = "Official Monster Raving Loony Party",
                    Link = "https://www.omrlp.com/",
                    Manifesto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor tellus, hendrerit id massa lobortis, facilisis tempus est. Integer congue euismod sapien consectetur faucibus. Morbi luctus consequat nulla, at " +
                                "porttitor dolor vulputate nec. Proin dapibus sed odio in mollis. Morbi in leo maximus, porta nisi vel, pellentesque elit. " +
                                "Ut et purus dui. Vivamus posuere, diam non cursus tempor, tortor magna tempus est, sed semper lectus turpis eget turpis. Integer in ligula odio. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus" +
                                " et malesuada fames ac turpis egestas. Vestibulum a ipsum lorem. Fusce ut iaculis mauris. Quisque metus diam, ullamcorper in tellus ut, lacinia sollicitudin enim. Pellentesque nec lacus nulla."
                },
            };
            parties.ForEach(v => context.Parties.Add(v));
            context.SaveChanges();
        }
    }
}