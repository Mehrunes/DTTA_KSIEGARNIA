﻿using System.Collections.Generic;
using System.Linq;

namespace BookStore.Tools
{
    public static class EnumerableExtensions
    {
        public static string ToElementsString<T>(this IEnumerable<T> subject)
        {
            return $"[{string.Join(", ", subject ?? Enumerable.Empty<T>())}]";
        }
    }
}