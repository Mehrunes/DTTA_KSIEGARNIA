using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Model;

namespace AngularServer.Model
{
    public class AddDataToDataBase
    {
        private readonly AppDbContext _context;

        public AddDataToDataBase(
            AppDbContext context
            )
        {
            _context = context;
        }

        public async Task EnsureData()
        {
            if (!_context.Books.Any())
            {
                var books = new List<Book>
                {
                    new Book
                    {
                    
                        Title = "Pan tadeusz",
                        Author = "Adam Mickiewicz"
                    },
                    new Book
                    {
                      
                        Title = "krzyzacy",
                        Author = "Henryk Sienkiewicz"
                    }
                };

                _context.Books.AddRange(books);
                await _context.SaveChangesAsync();
            }
        }
    }
}
