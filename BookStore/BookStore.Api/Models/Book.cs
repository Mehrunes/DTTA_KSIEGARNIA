using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace BookStore.Model
{
    public class Book
    {
      
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }

    }
}
