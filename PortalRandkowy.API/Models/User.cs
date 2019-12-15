using System;

namespace PortalRandkowy.API.Models
{
    public class User
    {
        public int id { get; set; }
        public String Username{ get; set; }
        public byte[] PasswordHash { get; set; }

        public byte[] PassordSalt { get; set; }

    }
}