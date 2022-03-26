namespace backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateUserTable2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "Birthday", c => c.DateTime(nullable: false));
            DropColumn("dbo.Users", "Bithday");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "Bithday", c => c.DateTime(nullable: false));
            DropColumn("dbo.Users", "Birthday");
        }
    }
}
