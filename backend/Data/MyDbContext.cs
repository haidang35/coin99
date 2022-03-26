using backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace backend.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext() : base("ConnectionString")
        {
          /*  this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;*/
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<PostCategory> PostCategories { get; set; }
        public DbSet<UpgradePack> UpgradePacks { get; set; }
        public DbSet<Coin> Coins { get; set; }
        public DbSet<CoinCategory> CoinCategories { get; set; }
        public DbSet<CoinMarket> CoinMarkets { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<UpgradePackPrice> UpgradePackPrices { get; set; }
        public DbSet<UserRegistedUpgrade> UserRegistedUpgrades { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
    }
}