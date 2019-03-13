using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using Web.DAL;

namespace Web.DAL.Repository
{
    public class Repository<T> : IRepository<T>, IDisposable
    {
        private EvotingContext context;

        public Repository(EvotingContext context)
        {
            this.context = context;
        }

        public IEnumerable<T> GetAll()
        {
            return context.T.toList();
        }

        public T GetById(int id)
        {
            return context.T.Find(id);
        }

        public void Create(T entity)
        {
            context.T.Add(entity);
        }

        public void Delete(int id)
        {
            T entity = GetById(id);
            context.T.Remove(entity);
        }

        public void Update(T entity)
        {
            context.Entry(T).State = EntityState.Modified;
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = false;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}