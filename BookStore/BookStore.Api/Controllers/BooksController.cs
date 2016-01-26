using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using AngularServer.Model;
using BookStore.Api.Service;
using BookStore.Model;
using BookStore.Models;
using BookStore.Storage;

namespace BookStore.Api.Controllers
{
   
    public class BooksController : ApiController
    {
        private readonly IBudgetService _bookService;
        private readonly IRepository<Book> _templateRepository;
        public BooksController(IBudgetService bookService, IRepository<Book> templateRepository)
        {

            _bookService = bookService;
            _templateRepository = templateRepository;

        }

        [EnableCors(origins: "http://localhost:49989", headers: "*", methods: "*")]
        [Route("api/Books")]
        public IEnumerable<BookModel> GetBooks()
        {
            return _bookService.GetAllBooks().Select(x => new BookModel
            {
                Id = x.Id.Value,
                Author = x.Author,
                Title = x.Title
            });
        }


        [EnableCors(origins: "http://localhost:49989", headers: "*", methods: "*")]
        [Route("api/AddBook/")]
        [HttpPost]
        public IHttpActionResult Books(addBookTemplate parameter)
        {
            var template = new Book
            {
                Title = parameter.Title,
                Author = parameter.Author,
            };
            _bookService.CreateBook(template);
            


            return CreatedAtRoute("GetBookById", new { id = template.Id }, template);
        }

        [EnableCors(origins: "http://localhost:49989", headers: "*", methods: "*")]
        [Route("api/CheckBook/{id}")]
        [HttpPost]
        public IHttpActionResult Books2(checkBookTemplate parameter,int id)
        {
            
            var book = _bookService.GetBookById(id);
            book.Check = parameter.Check;
            _bookService.UpdateBook(book);


            return CreatedAtRoute("GetBookById", new { id = book.Id }, book);
        }


        [EnableCors(origins: "http://localhost:49989", headers: "*", methods: "*")]
        [Route("api/Book/{id}", Name = "GetBookById")]
        [HttpGet]
        public BookModel GetBook(int id)
        {
            var template = _templateRepository.FindById(id);
            return new BookModel
            {
                Id = id,
                Title = template.Title,
                Author = template.Author,
                Check = template.Check
            };
        }
    }
}
