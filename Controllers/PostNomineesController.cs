using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Training_Project_1.Models;
using Training_Project_1.Models.Context;

namespace Training_Project_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class PostNomineesController : ControllerBase
    {
        private readonly DataContext _context;

        public PostNomineesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/PostNominees
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PostNominee>>> GetPostNominees()
        {
            return await _context.PostNominees.ToListAsync();
        }

        // GET: api/PostNominees/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<PostNominee>> GetPostNominee(int id)
        {
            var postNominee = await _context.PostNominees.FindAsync(id);

            if (postNominee == null)
            {
                return NotFound();
            }

            return postNominee;
        }

        // PUT: api/PostNominees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPostNominee(int id, PostNominee postNominee)
        {
            if (id != postNominee.PostNomineeID)
            {
                return BadRequest();
            }

            _context.Entry(postNominee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostNomineeExists(id))
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

        // POST: api/PostNominees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PostNominee>> PostPostNominee(PostNominee postNominee)
        {
            _context.PostNominees.Add(postNominee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPostNominee", new { id = postNominee.PostNomineeID }, postNominee);
        }

        // DELETE: api/PostNominees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePostNominee(int id)
        {
            var postNominee = await _context.PostNominees.FindAsync(id);
            if (postNominee == null)
            {
                return NotFound();
            }

            _context.PostNominees.Remove(postNominee);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostNomineeExists(int id)
        {
            return _context.PostNominees.Any(e => e.PostNomineeID == id);
        }
    }
}
