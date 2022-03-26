using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Text;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using backend.Data;
using backend.Dtos;
using backend.Helpers;
using backend.Models;
using Newtonsoft.Json;

namespace backend.Controllers
{
   
    [Authorize]
    public class UserController : ApiController
    {
        private MyDbContext db = new MyDbContext();

        [AllowAnonymous]
        [Route("~/api/user/register")]
        [HttpPost]
        public IHttpActionResult Register(UserRegisterDto userRegister)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            var newUser = new User()
            {
                FullName = userRegister.FullName,
                Email = userRegister.Email,
                PhoneNumber = userRegister.PhoneNumber,
                Birthday = userRegister.Birthday,
                AccountType  = AccountType.Normal,
                Status = UserStatus.Active,
                CreateAt = DateTime.Now,
                UpdateAt = DateTime.Now,
                Password = Hash.Make(userRegister.Password),
            };
            db.Users.Add(newUser);
            try
            {
                db.SaveChanges();

            }catch(Exception e)
            {
                return BadRequest();
            }
            return Ok(newUser);
        }

        
        [Route("~/api/users")]
        [Authorize(Roles = "SuperAdmin")]
        public IQueryable<User> GetUsers()
        {
            return db.Users;
        }

        // GET: api/Users/5
        [Route("~/api/users/{id}")]
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: api/Users/5
        [Route("~/api/users/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Users
        [Route("~/api/users")]
        [ResponseType(typeof(User))]
        [AllowAnonymous]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Users.Add(user);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [Route("~/api/users/{id}")]
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            db.Users.Remove(user);
            db.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}