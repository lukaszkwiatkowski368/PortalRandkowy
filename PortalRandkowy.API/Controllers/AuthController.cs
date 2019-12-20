using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PortalRandkowy.API.Data;
using PortalRandkowy.API.Dtos;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repostiory;
        public AuthController(IAuthRepository repostiory)
        {
            _repostiory = repostiory;
        }

        [HttpPost("register")]

        public async Task<IActionResult> Register (UserforRegisterDto userForRegisterDto)
        {
           userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if(await _repostiory.UserExists(userForRegisterDto.Username))
                return BadRequest("Użytkownik o takiej nazwie już istniej !");

            var userToCreate = new User{
                Username = userForRegisterDto.Username
            };
            var createdUser = await _repostiory.Register(userToCreate, userForRegisterDto.Password);
            return StatusCode(201);            
        }

    }
}