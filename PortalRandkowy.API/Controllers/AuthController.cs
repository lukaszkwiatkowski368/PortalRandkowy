using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
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

        private readonly IConfiguration _config;
        public AuthController(IAuthRepository repostiory, IConfiguration config)
        {
            _config = config;
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
        [HttpPost("login")]

        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto){
            var userFromRepo = await _repostiory.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);
            if(userFromRepo == null)
                return Unauthorized();
            
            //create Token
            var claims = new[]
            {   
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddHours(12),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return Ok(new { token = tokenHandler.WriteToken(token)});
        }



    }
}