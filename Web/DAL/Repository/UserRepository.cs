using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using Web.DAL;

namespace Web.DAL.Repository
{
    public class UserRepository<T> : Repository<T> where T : class, IUserRepository<T>
    {
        public UserRepository(EvotingContext Context)
        {
            
        }

        public IEnumerable<T> GetUsers()
        {
            return context.T.toList();
        }

        public T GetUserById(int id)
        {
            return context.T.Find(id);
        }

        public void CreateUser(T user)
        {
            context.T.Add(user);
        }

        public void DeleteUser(int userId)
        {
            T user = GetUserById(userId);
            context.T.Remove(user);
        }

        public void UpdateUser(T user)
        {
            context.Entry(T).State = EntityState.Modified;
        }
    }
}