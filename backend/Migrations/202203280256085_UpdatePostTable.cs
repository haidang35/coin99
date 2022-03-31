namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatePostTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Posts", "Slug", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Posts", "Slug");
        }
    }
}
