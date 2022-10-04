using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Training_Project_1.Models;
using Training_Project_1.Models.Context;

namespace Training_Project_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NomineesController : ControllerBase
    {
        private readonly DataContext _context;

        public NomineesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Nominees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Nominee>>> GetNominees()
        {
            return await _context.Nominees.ToListAsync();
        }

        // GET: api/Nominees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Nominee>> GetNominee(string id)
        {
            var nominee = await _context.Nominees.FindAsync(id);

            if (nominee == null)
            {
                return NotFound();
            }

            return nominee;
        }

        // PUT: api/Nominees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNominee(string id, Nominee nominee)
        {
            if (id != nominee.NomineeID)
            {
                return BadRequest();
            }

            _context.Entry(nominee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomineeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Nominees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Nominee>> PostNominee(Nominee nominee)
        {
            _context.Nominees.Add(nominee);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (NomineeExists(nominee.NomineeID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetNominee", new { id = nominee.NomineeID }, nominee);
        }

        // DELETE: api/Nominees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNominee(string id)
        {
            var nominee = await _context.Nominees.FindAsync(id);
            if (nominee == null)
            {
                return NotFound();
            }

            _context.Nominees.Remove(nominee);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NomineeExists(string id)
        {
            return _context.Nominees.Any(e => e.NomineeID == id);
        }
    }
}
