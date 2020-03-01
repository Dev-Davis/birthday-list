using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using bday_list.DataModels;
using Dapper;

namespace bday_list.Repositories
{
    public class GuestsRepository
    {
        readonly string _connectionString = "Server=localhost;Database=bdaylist;Trusted_Connection=True;";

        public List<WishList> GetAllGifts()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var gifts = db.Query<WishList>(@"select * from ")
            }
        }
    }
}
