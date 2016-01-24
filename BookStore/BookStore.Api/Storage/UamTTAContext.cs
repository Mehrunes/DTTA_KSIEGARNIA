using System.Configuration;
using System.Data.Entity;
using BookStore.Model;

namespace BookStore.Storage
{
    public class UamTTAContext : DbContext
    {
        public UamTTAContext()
            : this("UamTTAConnectionString")
        {
        }

        public UamTTAContext(string connectionStringName)
            : base(ConfigurationManager.ConnectionStrings[connectionStringName].ConnectionString)
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }

        public DbSet<Book> Books { get; set; }
    }
}