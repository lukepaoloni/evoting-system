namespace WebApplication1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeUserTableName1 : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.AspNetUsers", newName: "Users");
            DropForeignKey("dbo.Voters", "Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.Voters", "Constituency_Id", "dbo.Constituency");
            DropIndex("dbo.Voters", new[] { "Id" });
            DropIndex("dbo.Voters", new[] { "Constituency_Id" });
            DropColumn("dbo.Users", "Role");
            DropColumn("dbo.Users", "Password");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Voters",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Constituency_Id = c.Int(),
                        NumOfVote = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Constituency",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Users", "Password", c => c.String());
            AddColumn("dbo.Users", "Role", c => c.String());
            CreateIndex("dbo.Voters", "Constituency_Id");
            CreateIndex("dbo.Voters", "Id");
            AddForeignKey("dbo.Voters", "Constituency_Id", "dbo.Constituency", "Id");
            AddForeignKey("dbo.Voters", "Id", "dbo.AspNetUsers", "Id");
            RenameTable(name: "dbo.Users", newName: "AspNetUsers");
        }
    }
}
