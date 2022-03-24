using backend.Services;
using Hangfire;
using Hangfire.SqlServer;
using Microsoft.Owin;
using Owin;
using System;
using System.Threading.Tasks;

[assembly: OwinStartup(typeof(backend.Startup))]

namespace backend
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            JobStorage.Current = new SqlServerStorage("ConnectionString");
            app.UseHangfireServer();
            BinanceService binanceService = new BinanceService();
            RecurringJob.AddOrUpdate(() => binanceService.Subcribe24PriceChange(), Cron.Minutely);
        }
    }
}
