using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.Entity;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("api/InsertUser")]
        private User Insert(User model)
        {
           
            using (DBModel db = new DBModel())
            {
                model.CreatedDate = DateTime.Now;
                db.Users.Add(model);

                db.SaveChanges();
                return model;
            }
        }

        [HttpPost]
        [Route("api/ValidateTenant")]
        public User ValidateTenant(User model)
        {
            using (DBModel db = new DBModel())
            {
                if (db.Users.Any(u => u.Email == model.Email))
                {
                    return db.Users.FirstOrDefault(u => u.Email.Equals(model.Email));
                }

               model = Insert(model);//log record and show register request form
                return model;
            }
        }
    }
}
