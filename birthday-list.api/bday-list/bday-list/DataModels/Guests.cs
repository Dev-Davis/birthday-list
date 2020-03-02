using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bday_list.DataModels
{
    public class Guests
    {
        public int Id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string Address { get; set; }
        public string Relationship { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public bool RSVP { get; set; }
    }
}
