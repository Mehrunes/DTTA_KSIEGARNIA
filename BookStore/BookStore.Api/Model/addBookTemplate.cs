using Newtonsoft.Json;

namespace BookStore.Api.Model
{
    public class addBookTemplate
    {
      
        [JsonProperty(PropertyName = "Title")]
        public string Title { get; set; }

        [JsonProperty(PropertyName = "Author")]
        public string Author { get; set; }

    }
}