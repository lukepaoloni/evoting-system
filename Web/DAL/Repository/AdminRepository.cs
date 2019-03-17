using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web.Models;

namespace Web.DAL.Repository
{
    public class AdminRepository : AbstractRepository<Admin>
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