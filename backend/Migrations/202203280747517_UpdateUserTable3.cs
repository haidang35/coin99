namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateUserTable3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "CreatedAt", c => c.DateTime(nullable: false));
            AddColumn("dbo.Users", "UpdatedAt", c => c.DateTime(nullable: false));
            DropColumn("dbo.Users", "CreateAt");
            DropColumn("dbo.Users", "UpdateAt");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "UpdateAt", c => c.DateTime(nullable: false));
            AddColumn("dbo.Users", "CreateAt", c => c.DateTime(nullable: false));
            DropColumn("dbo.Users", "UpdatedAt");
            DropColumn("dbo.Users", "CreatedAt");
        }
    }
}
