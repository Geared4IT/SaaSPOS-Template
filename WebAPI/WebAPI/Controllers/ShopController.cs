using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class ShopController : ApiController
    {
        [HttpGet]
        [Route("api/Shop")]
        public HttpResponseMessage GetItems()
        {
            using (DBModel db = new DBModel())
            {
                var Items = db.Items.Select(x => new { Item_ID = x.Item_ID, Title = x.Title, Image = x.Image, Cost = x.Cost }).ToArray();
                return this.Request.CreateResponse(HttpStatusCode.OK, Items);
            }
        }
    }
}
