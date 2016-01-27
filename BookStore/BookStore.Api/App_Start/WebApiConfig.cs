using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;
using System.Web.Http.Cors;
using Autofac;
using Autofac.Integration.WebApi;
using BookStore.Api.Service;
using BookStore.Storage;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;

namespace BookStore.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            var corsAttr = new EnableCorsAttribute("http://localhost:49989/", "*", "*");
            config.EnableCors(corsAttr);
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
                new CamelCasePropertyNamesContractResolver();
            config.Formatters.JsonFormatter.UseDataContractJsonSerializer = false;

            config.MapHttpAttributeRoutes();

            var builder = new ContainerBuilder();
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            ConfigureContainer(builder);

            var container = builder.Build();

          
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
            EnableCrossSiteRequests(config);
        }

        private static void ConfigureContainer(ContainerBuilder builder)
        {
            builder.Register(_ => new UamTTAContext("UamTTAConnectionString")).As<UamTTAContext>();
          
            builder.RegisterGeneric(typeof(Repository<>)).As(typeof(IRepository<>));
            builder.RegisterType<BookService>().As<IBudgetService>();
         
        }
        private static void EnableCrossSiteRequests(HttpConfiguration config)
        {
            var cors = new EnableCorsAttribute(
                origins: "*",
                headers: "*",
                methods: "*");
            config.EnableCors(cors);
        }
    }
}
