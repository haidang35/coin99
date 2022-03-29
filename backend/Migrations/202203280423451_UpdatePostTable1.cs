namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatePostTable1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Posts", "Author_Id", c => c.Int());
            CreateIndex("dbo.Posts", "Author_Id");
            AddForeignKey("dbo.Posts", "Author_Id", "dbo.Users", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Posts", "Author_Id", "dbo.Users");
            DropIndex("dbo.Posts", new[] { "Author_Id" });
            DropColumn("dbo.Posts", "Author_Id");
        }
    }
}
