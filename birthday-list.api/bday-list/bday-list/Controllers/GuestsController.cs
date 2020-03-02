using bday_list.Commands;
using bday_list.DataModels;
using bday_list.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace bday_list.Controllers
{
    [Route("api/guests")]
    [ApiController]
    public class GuestsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Guests>> AllGuests()
        {
            var repo = new GuestsRepository();
            return repo.GetAllGuests();
        } 

        [HttpPost]
        public int NewGuest(AddGuestCommand addGuestCommand)
        {
            var repo = new GuestsRepository();
            return repo.AddGuest(addGuestCommand);
        }
    }
}