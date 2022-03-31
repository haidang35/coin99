namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatePostCategory1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.PostCategories", "CreatedAt", c => c.DateTime(nullable: false));
            AddColumn("dbo.PostCategories", "UpdatedAt", c => c.DateTime(nullable: false));
            DropColumn("dbo.PostCategories", "CreateAt");
            DropColumn("dbo.PostCategories", "UpdateAt");
        }
        
        public override void Down()
        {
            AddColumn("dbo.PostCategories", "UpdateAt", c => c.DateTime(nullable: false));
            AddColumn("dbo.PostCategories", "CreateAt", c => c.DateTime(nullable: false));
            DropColumn("dbo.PostCategories", "UpdatedAt");
            DropColumn("dbo.PostCategories", "CreatedAt");
        }
    }
}
