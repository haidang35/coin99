using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Security.Claims;
using System.Text;
using System.Web;
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
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now,
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

        [Route("~/api/auth-user")]
        [HttpGet]
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUserAuth()
        {
            var identity = HttpContext.Current.User.Identity as ClaimsIdentity;
            var currentUserId = identity.FindFirst("currentUserId").Value;
            var currentUser = db.Users.Find(Int32.Parse(currentUserId));
            return Ok(currentUser);
        }

        [Route("~/api/users/{id}/roles")]
        [HttpGet]
        [ResponseType(typeof(ICollection<UserRole>))]
        public IHttpActionResult GetUserRoles(int id)
        {
            var userRoles = db.UserRoles.Where(u => u.UserId == id).ToList();
            return Ok(userRoles);
        }

        
        [Route("~/api/users")]
        [Authorize]
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
        [HttpPut]
        public IHttpActionResult PutUser(int id, UserUpdate userUpdate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = db.Users.Find(id);
            if(user == null)
            {
                return BadRequest("User doesn't exist !");
            }
            user.FullName = userUpdate.FullName;
            user.Birthday = userUpdate.Birthday;
            user.Email = userUpdate.Email;
            user.PhoneNumber = userUpdate.PhoneNumber;
            user.AccountType = userUpdate.AccountType;
            user.Status = userUpdate.Status;
            var userRole = db.UserRoles.Where(u => u.UserId == id).FirstOrDefault();
            if(userRole != null)
            {
                userRole.RoleId = userUpdate.RoleId;
                db.Entry(userRole).State = EntityState.Modified;

            }
            db.Entry(user).State = EntityState.Modified;
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }
            return Ok(user);
        }

        // POST: api/Users
        [Route("~/api/users")]
        [HttpPost]
        [ResponseType(typeof(User))]
        [AllowAnonymous]
        public IHttpActionResult PostUser(UserDto userRegister)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = db.Users.Where(u => u.Email == userRegister.Email).FirstOrDefault();
            if(user != null)
            {
                return BadRequest("Email already exists !!");
            }
            var newUser = new User()
            {
                FullName = userRegister.FullName,
                Email = userRegister.Email,
                PhoneNumber = userRegister.PhoneNumber,
                Birthday = userRegister.Birthday,
                AccountType = userRegister.AccountType,
                Status = userRegister.Status,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now,
                Password = Hash.Make(userRegister.Password),
            };
            db.Users.Add(newUser);
            var userRole = new UserRole()
            {
                UserId = newUser.Id,
                RoleId = userRegister.RoleId,
            };
            db.UserRoles.Add(userRole);
            db.SaveChanges();

            return Ok(newUser);
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