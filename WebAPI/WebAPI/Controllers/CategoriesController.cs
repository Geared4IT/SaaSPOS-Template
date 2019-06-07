using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class CategoriesController : ApiController
    {
        [HttpGet]
        [Route("api/GetCategories")]
        public HttpResponseMessage GetItems()
        {
            using (DBModel db = new DBModel())
            {
                var items = db.Categories.Select(x => new { CategoryId = x.CategoryId, Name = x.Name , IsActive = x.IsActive , TenantId = x.TenantId }).ToArray();
                return this.Request.CreateResponse(HttpStatusCode.OK, items);
            }
        }

        [HttpPost]
        [Route("api/CreateCategory")]
        public Category Create(Category model)
        {
            using (DBModel db = new DBModel())
            {
                db.Categories.Add(model);
                db.SaveChanges();
                return model;
            }
        }


        #region MyRegion

        [HttpGet]
        [Route("api/GetProducts")]
        public HttpResponseMessage GetProducts()
        {
            using (DBModel db = new DBModel())
            {
                var items = db.Items.Select(x => new { ProductId = x.Item_ID, Name = x.Title, Cost = x.Cost, CategoryId = x.CategoryId, Comment = x.Comment, IsActive = x.IsActive, Image = x.Image, TenantId = x.TenantId }).ToList();
                return this.Request.CreateResponse(HttpStatusCode.OK, items);
            }
        }

        #endregion

    }
}
