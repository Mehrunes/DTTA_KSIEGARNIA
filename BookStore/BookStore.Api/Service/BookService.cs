using System;
using System.Collections.Generic;
using System.Linq;
using BookStore.Api.Service;
using BookStore.Model;
using BookStore.Storage;

namespace BookStore.Api.Service
{
    public class BookService : IBudgetService
    {

        private readonly IRepository<Book> _bookRepository;


        public BookService( IRepository<Book> bookRepository)
        {

            _bookRepository = bookRepository;
        }

        public Book GetBookById(int budgetId)
        {
            return _bookRepository.FindById(budgetId);
        }
//
        public Book UpdateBook(Book budget)
        {
            return _bookRepository.Persist(budget);
        }

        public IEnumerable<Book> GetAllBooks()
        {
            return _bookRepository.GetAll();
        }

        //        public Book AddBook(int bookId)
        //        {
        //            Book book = _bookRepository.FindById(bookId);
        //            if (book == null)
        //                throw new ArgumentException("Book id is invalid!", nameof(bookId));
        //
        //            return _bookRepository.Persist(book);
        //        }

        public Book CreateBook(Book book)
        {
            return _bookRepository.Persist(book);
        }

    }
}