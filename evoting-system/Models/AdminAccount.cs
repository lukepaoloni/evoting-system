using System;

namespace evotingsystem.Models
{
    public class AdminAccount: AbstractUser
    {
        public AdminAccount()
        {
        }

        public void ConfigureResult()
        {
            Console.WriteLine("Called ConfigureResult");
        }

        public void GenerateResults()
        {
            Console.WriteLine("Called GenrateResults");
        }
    }
}
