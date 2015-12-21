using System.Collections.Generic;
using AngualrServer.Model;
using Microsoft.AspNet.Mvc;

namespace AngualrServer.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        // GET: api/books
        [HttpGet]
        public IEnumerable<Book> Get()
        {

            return new List<Book>
            {
                new Book
                {
                    Id = 1,
                    Title = "Pan tadeusz",
                    Author = "Adam Mickiewicz"
                },
                new Book
                {
                    Id = 2,
                    Title = "krzyzacy",
                    Author = "Henryk Sienkiewicz"
                }
            };
        }
    }
}
