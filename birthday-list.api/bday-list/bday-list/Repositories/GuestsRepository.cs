using bday_list.Commands;
using bday_list.DataModels;
using Dapper;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace bday_list.Repositories
{
    public class GuestsRepository
    {
        readonly string _connectionString = "Server=localhost;Database=bdaylist;Trusted_Connection=True;";

        public List<Guests> GetAllGuests()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var guests = db.Query<Guests>(@"select * from [Guests]");
                return guests.AsList();
            }
        }

        public int AddGuest(AddGuestCommand addGuestCommand)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"insert into [dbo].[Guests]([firstName], [lastName], [Address], [Relationship], [RSVP], [City], [State])
                            values
                            (
	                            @firstName,
	                            @lastName,
	                            @Address,
	                            @Relationship,
	                            @RSVP,
	                            @City,
	                            @State
                            )";
                return db.Execute(sql, addGuestCommand);
            }
        }
    }
}
