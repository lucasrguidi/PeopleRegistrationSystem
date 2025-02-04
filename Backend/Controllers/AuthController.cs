using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] Auth auth)
        {
            if (auth.Username == "SISTEMA" && auth.Password == "candidato123")
            {
                return Ok("Autorizado");
            }
            return Unauthorized("Não autorizado"); 
        }
    }
}
