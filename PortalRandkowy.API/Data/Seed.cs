using System.io;
using Newtonsoft.Json;
using System.Collections.Generic;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        public Seed(DataContext context)
        {
            _context=context;
        }

        public void SeedUsers()
        {
            var userData = File.ReadAllText("Data/UserSeedData.json");
            var users = JsonConvert.DeserializeObject<List<user>>(userData);

            foreach (var user in users){
                
            }
        }
    }
;