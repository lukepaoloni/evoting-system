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
                    Manifesto = Faker.Lorem.Paragraphs(Faker.RandomNumber.Next(3, 5))
                },
                new Party
                {
                    Name = "Labour Party",
                    Link = "https://www.LabourParty.com",
                    Manifesto = Faker.Lorem.Paragraphs(Faker.RandomNumber.Next(3, 5))
                },
                new Party
                {
                    Name = "Scottish National Party	",
                    Link = "https://www.snp.org",
                    Manifesto = Faker.Lorem.Paragraphs(Faker.RandomNumber.Next(3, 5))
                },
                new Party
                {
                    Name = "Liberal Democrats",
                    Link = "https://www.libdems.org.uk/",
                    Manifesto = Faker.Lorem.Paragraphs(Faker.RandomNumber.Next(3, 5))
                },
                new Party
                {
                    Name = "Democratic Unionist Party",
                    Link = "www.mydup.com/",
                    Manifesto = Faker.Lorem.Paragraphs(Faker.RandomNumber.Next(3, 5))
                },
                new Party
                {
                    Name = Faker.Company.Name(),
                    Link = Faker.Internet.DomainName(),
                    Manifesto = Faker.Lorem.Paragraphs(Faker.RandomNumber.Next(3, 5))
                },
                new Party
                {
                    Name = "Official Monster Raving Loony Party",
                    Link = "https://www.omrlp.com/",
                    Manifesto = Faker.Lorem.Paragraphs(Faker.RandomNumber.Next(3, 5))
                },
            };
            parties.ForEach(v => context.Parties.Add(v));
            context.SaveChanges();
        }
    }
}