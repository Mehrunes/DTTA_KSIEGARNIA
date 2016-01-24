﻿using System;
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

        public Book GetBudgetById(int budgetId)
        {
            return _bookRepository.FindById(budgetId);
        }

        public Book UpdateBudget(Book budget)
        {
            return _bookRepository.Persist(budget);
        }

        public IEnumerable<Book> GetAllBooks()
        {
            return _bookRepository.GetAll();
        }

        public Book AddAccountToBudget(int budgetId, int accountId)
        {
            Book budget = _bookRepository.FindById(budgetId);
            if (budget == null)
                throw new ArgumentException("Book id is invalid!", nameof(budgetId));

            return _bookRepository.Persist(budget);
        }

      
    }
}