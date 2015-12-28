using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;
using System.Web.Http.Cors;
using Autofac;
using Autofac.Integration.WebApi;
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
        }

        private static void ConfigureContainer(ContainerBuilder builder)
        {
//            builder.Register(_ => new UamTTAContext("UamTTAConnectionString")).As<UamTTAContext>();
//            builder.RegisterType<BudgetFactory>().As<IBudgetFactory>();
//            builder.RegisterGeneric(typeof(Repository<>)).As(typeof(IRepository<>));
//            builder.RegisterType<BudgetService>().As<IBudgetService>();
//            builder.RegisterType<AccountService>().As<IAccountService>();
        }
    }
}
