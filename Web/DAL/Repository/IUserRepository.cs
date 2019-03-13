using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Web.DAL.Repository
{
    public interface IUserRepository<T> : IDisposable
    {
        IEnumerable<T> GetUsers();
        T GetUserById(int userId);
        void CreateUser(T user);
        void DeleteUser(int userId);
        void UpdateUser(T user);
        void Save();
    }
}
