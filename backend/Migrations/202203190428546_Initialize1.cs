namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initialize1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CoinCategories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        Status = c.Int(nullable: false),
                        CreateAt = c.DateTime(nullable: false),
                        UpdateAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.CoinMarkets",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        MarketCode = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Coins",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CoinName = c.String(),
                        Type = c.Int(nullable: false),
                        Price = c.Double(nullable: false),
                        Change24Price = c.Double(nullable: false),
                        Volumn24h = c.Double(nullable: false),
                        MarketCap = c.Double(nullable: false),
                        Description = c.String(),
                        MarketId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Notifications",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Content = c.String(),
                        Type = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                        SenderId = c.Int(nullable: false),
                        ReceiverId = c.Int(nullable: false),
                        Description = c.String(),
                        CreateAt = c.DateTime(nullable: false),
                        UpdateAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PostCategories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Description = c.String(),
                        CategoryType = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                        CreateAt = c.DateTime(nullable: false),
                        UpdateAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UpgradePackPrices",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UpgradePackId = c.Int(nullable: false),
                        Price = c.Double(nullable: false),
                        Period = c.Int(nullable: false),
                        PeriodType = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                        CreateAt = c.DateTime(nullable: false),
                        UpdateAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserRegistedUpgrades",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        UpgradePackId = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                        Note = c.String(),
                        CreateAt = c.DateTime(nullable: false),
                        UpdateAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.UserRegistedUpgrades");
            DropTable("dbo.UpgradePackPrices");
            DropTable("dbo.PostCategories");
            DropTable("dbo.Notifications");
            DropTable("dbo.Coins");
            DropTable("dbo.CoinMarkets");
            DropTable("dbo.CoinCategories");
        }
    }
}
