using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bday_list.DataModels
{
    public class WishList
    {
        public Clothes Clothes { get; set; }
        public Toys Toys { get; set; }
        public Other Other { get; set; }
    }
}
