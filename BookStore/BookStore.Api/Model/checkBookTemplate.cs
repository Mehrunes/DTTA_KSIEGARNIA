using Newtonsoft.Json;

namespace AngularServer.Model
{
    public class checkBookTemplate
    {

        [JsonProperty(PropertyName = "Check")]
        public bool Check { get; set; }

    }
}