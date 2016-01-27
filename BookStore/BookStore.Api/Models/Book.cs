using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Api.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace BookStore.Model
{
    public class Book : ModelBase
    {
      
       
        public string Title { get; set; }
        public string Author { get; set; }
        public bool Check { get; set; }


        public override string ToString()
        {
            return Author + ' '+ Title;
        }

    }
}
