namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateUserTable1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Users", "AccountType", c => c.Int(nullable: false));
            DropColumn("dbo.Users", "IndentityNumber");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "IndentityNumber", c => c.String(nullable: false));
            AlterColumn("dbo.Users", "AccountType", c => c.String(nullable: false));
        }
    }
}
