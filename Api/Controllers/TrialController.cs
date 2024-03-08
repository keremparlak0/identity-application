using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class TrialController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAraBulGetir()
        {
            return Ok("Get hele");
        }
    }
}
