namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatePostTale : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Posts", "CategoryId", c => c.Int(nullable: false));
            DropColumn("dbo.Posts", "Category");
            DropTable("dbo.PostCategories");
        }
        
        public override void Down()
        {
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
            
            AddColumn("dbo.Posts", "Category", c => c.Int(nullable: false));
            DropColumn("dbo.Posts", "CategoryId");
        }
    }
}
