using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace AngualrServer.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        // GET: api/books
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
    }
}
