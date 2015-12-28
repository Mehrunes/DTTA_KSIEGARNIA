using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using AngularServer.Model;
using BookStore.Model;

namespace BookStore.Api.Controllers
{
   
    public class BooksController : ApiController
    {

        [EnableCors(origins: "http://localhost:49989", headers: "*", methods: "*")]
        [Route("api/Books")]
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
        [EnableCors(origins: "http://localhost:49989", headers: "*", methods: "*")]
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
