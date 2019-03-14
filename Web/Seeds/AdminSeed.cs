﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.DAL;
using Web.Models;

namespace Web.Seeds
{
    public class AdminSeed
    {
        public static void Seed(EvotingContext context)
        {
            var admins = new List<Admin>
            {
                new Admin
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Username = Faker.Internet.UserName(),
                    Password = "password",
                    Role = Admin.ROLE
                },
                new Admin
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Username = Faker.Internet.UserName(),
                    Password = "password",
                    Role = Admin.ROLE
                },
                new Admin
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Username = Faker.Internet.UserName(),
                    Password = "password",
                    Role = Admin.ROLE
                },
                new Admin
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Username = Faker.Internet.UserName(),
                    Password = "password",
                    Role = Admin.ROLE
                },
                new Admin
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Username = Faker.Internet.UserName(),
                    Password = "password",
                    Role = Admin.ROLE
                }
            };
            admins.ForEach(a => context.Users.Add(a));
            context.SaveChanges();
        }
    }
}