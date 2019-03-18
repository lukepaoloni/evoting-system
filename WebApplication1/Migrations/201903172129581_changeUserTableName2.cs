namespace WebApplication1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeUserTableName2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "Role", c => c.String());
            AddColumn("dbo.Users", "NumOfVote", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "NumOfVote");
            DropColumn("dbo.Users", "Role");
        }
    }
}
