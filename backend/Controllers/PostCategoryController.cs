using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using backend.Data;
using backend.Dtos;
using backend.Models;

namespace backend.Controllers
{
    [EnableCors(origins: "https://coin99.cf, http://localhost:3000", headers: "*", methods: "*")]
    public class PostCategoryController : ApiController
    {
        private MyDbContext db = new MyDbContext();

        // GET: api/PostCategory
        [Route("~/api/post-categories")]
        [HttpGet]
        [ResponseType(typeof(ICollection<PostCategory>))]
        public IHttpActionResult GetPostCategories()
        {
            return Ok(db.PostCategories.ToList());
        }

        // GET: api/PostCategory/5
        [Route("~/api/post-categories/{id}")]
        [HttpGet]
        [ResponseType(typeof(PostCategory))]
        public IHttpActionResult GetPostCategory(int id)
        {
            PostCategory postCategory = db.PostCategories.Find(id);
            if (postCategory == null)
            {
                return NotFound();
            }

            return Ok(postCategory);
        }

        // PUT: api/PostCategory/5
        [Route("~/api/post-categories/{id}")]
        [ResponseType(typeof(void))]
        [HttpPut]
        public IHttpActionResult PutPostCategory(int id, PostCategoryDto newPostCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var postCategory = db.PostCategories.Find(id);
            if(postCategory == null)
            {
                return NotFound();
            }

            postCategory.Name = newPostCategory.Name;
            postCategory.Description = newPostCategory.Description;
            postCategory.CategoryType = newPostCategory.CategoryType;
            postCategory.Status = newPostCategory.Status;
            postCategory.UpdatedAt = DateTime.Now;
            db.Entry(postCategory).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }

            return Ok(postCategory);
        }

        // POST: api/PostCategory

        [Route("~/api/post-categories")]
        [HttpPost]
        [ResponseType(typeof(PostCategory))]
        public IHttpActionResult PostPostCategory(PostCategory postCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            postCategory.CreatedAt = DateTime.Now;
            postCategory.UpdatedAt = DateTime.Now;
            var newPostCategory = db.PostCategories.Add(postCategory);
            db.SaveChanges();

            return Ok(newPostCategory);
        }

        // DELETE: api/PostCategory/5
        [Route("~/api/post-categories/{id}")]
        [HttpDelete]
        [ResponseType(typeof(PostCategory))]
        public IHttpActionResult DeletePostCategory(int id)
        {
            PostCategory postCategory = db.PostCategories.Find(id);
            if (postCategory == null)
            {
                return NotFound();
            }

            db.PostCategories.Remove(postCategory);
            db.SaveChanges();

            return Ok(postCategory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PostCategoryExists(int id)
        {
            return db.PostCategories.Count(e => e.Id == id) > 0;
        }
    }
}