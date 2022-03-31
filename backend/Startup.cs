using backend.Auth;
using backend.Services;
using Hangfire;
using Hangfire.SqlServer;
using Microsoft.Owin;
using Microsoft.Owin.Security.Infrastructure;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Threading.Tasks;
using System.Web.Http;

[assembly: OwinStartup(typeof(backend.Startup))]

namespace backend
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            /*JobStorage.Current = new SqlServerStorage("ConnectionString");
            app.UseHangfireServer();
            BinanceService binanceService = new BinanceService();
            RecurringJob.AddOrUpdate(() => binanceService.Subcribe24PriceChange(), Cron.Minutely);*/

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            var myProvider = new ApiAuthorizationServerProvider();
            OAuthAuthorizationServerOptions options = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                Provider = myProvider,
            };
            app.UseOAuthAuthorizationServer(options);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);
        }
    }
}
