namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatePost : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Posts", "Title", c => c.String());
            AddColumn("dbo.Posts", "thumbnail", c => c.String());
            AddColumn("dbo.Posts", "Status", c => c.Int(nullable: false));
            DropColumn("dbo.Posts", "Type");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Posts", "Type", c => c.String());
            DropColumn("dbo.Posts", "Status");
            DropColumn("dbo.Posts", "thumbnail");
            DropColumn("dbo.Posts", "Title");
        }
    }
}
