using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.Models;

namespace Web.DAL.Repository
{
    public interface IAdminRepository
    {
        IQueryable<Admin> GetAdmins();
        Admin GetAdminById(int adminId);
        void CreateAdmin(Admin admin);
        void DeleteAdmin(int adminId);
        void UpdateAdmin(Admin admin);
        void Save();
    }

    public class AdminRepository : AbstractRepository<Admin>, IAdminRepository
    {
        public AdminRepository(EvotingContext context) : base(context)
        {

        }

        public void CreateAdmin(Admin admin)
        {
            Create(admin);
        }

        public void DeleteAdmin(int adminId)
        {
            Delete(adminId);
        }

        public Admin GetAdminById(int adminId)
        {
            return GetById(adminId);
        }

        public IQueryable<Admin> GetAdmins()
        {
            return GetAll();
        }

        public void UpdateAdmin(Admin admin)
        {
            Update(admin);
        }
    }
}