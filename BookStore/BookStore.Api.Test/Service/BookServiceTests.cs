
using BookStore.Api.Service;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookStore.Model;
using BookStore.Storage;
using FakeItEasy;
using NUnit.Framework;

namespace BookStore.Api.Service.Tests
{
    [TestFixture]
    public class BookServiceTests
    {

        [SetUp]
        public void SetUp()
        {
            _repository = A.Fake<IRepository<Book>>();

            _sut = new BookService(_repository);
        }

        private BookService _sut;
        private IRepository<Book> _repository;

        [Test]
        public void CreateBook_Should_Persist_Book_In_Repository()
        {
            var book = new Book();

            _sut.CreateBook(book);
         

            A.CallTo(() => _repository.Persist(book))
                .MustHaveHappened();
            Debug.WriteLine(("books " + book));
        }



        [Test]
        public void Get_All_Books_Test()
        {
            _sut.GetAllBooks();
                        Debug.WriteLine(("books "+_sut.GetAllBooks()));
           
            A.CallTo(()=>_repository.GetAll()).MustHaveHappened();
        }

       
    }
}