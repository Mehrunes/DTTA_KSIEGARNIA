using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularServer.Model;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;

namespace AngularServer
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services
              .AddMvc()
              .AddJsonOptions(options =>
              {
                  options.SerializerSettings.ContractResolver =
                  new CamelCasePropertyNamesContractResolver();
              });

            services.AddEntityFramework()
                .AddSqlServer()
                .AddDbContext<AppDbContext>();

//            services.AddIdentity<IdentityUser, IdentityRole>(
//                config =>
//                {
//                    config.Cookies.ApplicationCookie.LoginPath = "/Auth/Login";
//                })
//                .AddEntityFrameworkStores<AppDbContext>();

            services.AddTransient<AddDataToDataBase>();


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
            AddDataToDataBase addDataToDataBase)
        {
            app.UseIISPlatformHandler();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc(config =>
            {
                config.MapRoute(
                    name: "Default",
                    template: "{controller}/{action}/{id?}");
            });

            addDataToDataBase.EnsureData().Wait();
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
