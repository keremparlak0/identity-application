using Api.Models;
using Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrialController : ControllerBase
    {
        private readonly JwtService _jwtService;

        public TrialController(JwtService jwtService)
        {
            _jwtService = jwtService;
        }

        [HttpPost]
        public IActionResult CreateJwt([FromBody]User user)
        {
            string token = _jwtService.CreateJWT(user);
            return Ok(token);
        }
    }
}
