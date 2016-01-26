using System;
using System.Collections.Generic;
using BookStore.Model;

namespace BookStore.Api.Service
{
    public interface IBudgetService
    {


        IEnumerable<Book> GetAllBooks();
        Book CreateBook(Book book);
         Book GetBookById(int budgetId);
        Book UpdateBook(Book budget);
    }
}