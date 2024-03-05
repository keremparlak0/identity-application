using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrialController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAraBulGetir()
        {
            return Ok("Get hele");
        }
    }
}
