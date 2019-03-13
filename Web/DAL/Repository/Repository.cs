﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.Entity;
using Web.DAL;

namespace Web.DAL.Repository
{
    public class Repository<T> : IRepository<T> where T : class, IDisposable
    {
        public readonly EvotingContext Context;
        private readonly DbSet<T> _entitySet;

        public Repository(EvotingContext context)
        {
            Context = context;
            _entitySet = Context.Set<T>();
        }

        public IEnumerable<T> GetAll()
        {
            return _entitySet.ToList();
        }

        public T GetById(int id)
        {
            return _entitySet.Find(id);
        }

        public void Create(T entity)
        {
            _entitySet.Add(entity);
        }

        public void Delete(int id)
        {
            T entity = GetById(id);
            _entitySet.Remove(entity);
        }

        public void Update(T entity)
        {
            Context.Entry(_entitySet).State = EntityState.Modified;
        }

        public void Save()
        {
            Context.SaveChanges();
        }

        private bool _disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this._disposed)
            {
                if (disposing)
                {
                    Context.Dispose();
                }
            }
            this._disposed = false;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}