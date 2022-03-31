namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatePostTable2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Posts", "Author_Id", "dbo.Users");
            DropIndex("dbo.Posts", new[] { "Author_Id" });
            RenameColumn(table: "dbo.Posts", name: "Author_Id", newName: "AuthorId");
            AlterColumn("dbo.Posts", "AuthorId", c => c.Int(nullable: false));
            CreateIndex("dbo.Posts", "AuthorId");
            AddForeignKey("dbo.Posts", "AuthorId", "dbo.Users", "Id", cascadeDelete: true);
            DropColumn("dbo.Posts", "Authorld");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Posts", "Authorld", c => c.Int(nullable: false));
            DropForeignKey("dbo.Posts", "AuthorId", "dbo.Users");
            DropIndex("dbo.Posts", new[] { "AuthorId" });
            AlterColumn("dbo.Posts", "AuthorId", c => c.Int());
            RenameColumn(table: "dbo.Posts", name: "AuthorId", newName: "Author_Id");
            CreateIndex("dbo.Posts", "Author_Id");
            AddForeignKey("dbo.Posts", "Author_Id", "dbo.Users", "Id");
        }
    }
}
