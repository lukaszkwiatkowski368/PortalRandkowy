using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PortalRandkowy.API.Data;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
            _context = context;

        }
        // GET api/values
        [HttpGet]
        public IActionResult GetValues()
        {
            var values = _context.Values.ToList();
            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult GetValue(int id)
        {
            var value = _context.Values.FirstOrDefault(x => x.id == id);
            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public  ActionResult AddValue([FromBody] Value value)
        {
             _context.Values.Add(value);
             _context.SaveChanges();
             return Ok(value);   
        }

        // PUT api/values/5
        [HttpPut("{id}")] 
        public ActionResult EditValue(int id, [FromBody] Value value)
        {
            var data = _context.Values.Find(id);
            data.name = value.name;
            _context.Values.Update(data);
            _context.SaveChanges();
            return Ok(data);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult DeleteValue(int id)
        {
            var data = _context.Values.Find(id);
            if(data==null)
                return NoContent();
            _context.Values.Remove(data);
            _context.SaveChanges();
            return Ok(data);
        }
    }
}
