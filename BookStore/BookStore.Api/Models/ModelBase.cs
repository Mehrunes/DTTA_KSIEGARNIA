using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStore.Api.Models
{
    public abstract class ModelBase : IEntity
    {
        public int? Id { get; set; }

        public object Clone()
        {
            return MemberwiseClone();
        }
    }
}