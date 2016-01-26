using Newtonsoft.Json;

namespace AngularServer.Model
{
    public class addBookTemplate
    {
      
        [JsonProperty(PropertyName = "Title")]
        public string Title { get; set; }

        [JsonProperty(PropertyName = "Author")]
        public string Author { get; set; }

    }
}