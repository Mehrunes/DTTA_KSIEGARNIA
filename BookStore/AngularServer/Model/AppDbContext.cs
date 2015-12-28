using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Model;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;

namespace AngularServer.Model
{
    public class AppDbContext : IdentityDbContext
    {
        public DbSet<Book> Books { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Server = (localdb)\MSSQLLocalDB; Database = BookStorea; Trusted_Connection = True; MultipleActiveResultSets = True; ");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
