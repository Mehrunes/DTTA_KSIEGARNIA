using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularServer.Model;
using BookStore.Model;
using Microsoft.AspNet.Mvc;

namespace AngualrServer.Controllers
{
   
    public class BooksController : Controller
    {

        private readonly AppDbContext _context;

        public BooksController(AppDbContext context)
        {
            _context = context;
        }
        [Route("api/Books")]
        public IEnumerable<Book> Get()
        {
            return _context.Books
                //.Where(x => x.Username == User.Identity.Name)
                .ToList();
        }
        [HttpPost]
        [Route("api/AddBook")]
        public IEnumerable<Book>  Books(addBookTemplate parameter)
        {
          
            return new List<Book>
            {
                new Book
                {
                  
                    Title = parameter.Title,
                    Author = parameter.Author
                }
            };

        }


//                // GET: api/books
//                [HttpGet]
//                public IEnumerable<Book> Get()
//                {
//        
//                    return new List<Book>
//                    {
//                        new Book
//                        {
//                            Id = 1,
//                            Title = "Pan tadeusz",
//                            Author = "Adam Mickiewicz"
//                        },
//                        new Book
//                        {
//                            Id = 2,
//                            Title = "krzyzacy",
//                            Author = "Henryk Sienkiewicz"
//                        }
//                    };
//                }
    }
}
