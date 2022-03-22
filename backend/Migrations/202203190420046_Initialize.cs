namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initialize : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Posts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Type = c.String(),
                        Body = c.String(),
                        Category = c.Int(nullable: false),
                        Description = c.String(),
                        PostType = c.Int(nullable: false),
                        Authorld = c.Int(nullable: false),
                        CreateAt = c.DateTime(nullable: false),
                        UpdateAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UpgradePacks",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PackName = c.String(),
                        PackPacktype = c.Int(nullable: false),
                        Description = c.String(),
                        CreateAt = c.DateTime(nullable: false),
                        UpdateAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FullName = c.String(),
                        Bithday = c.DateTime(nullable: false),
                        Email = c.String(),
                        PhoneNumber = c.String(),
                        IndentityNumber = c.String(),
                        AccountType = c.String(),
                        Status = c.Int(nullable: false),
                        CreateAt = c.DateTime(nullable: false),
                        UpdateAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
            DropTable("dbo.UpgradePacks");
            DropTable("dbo.Posts");
        }
    }
}
