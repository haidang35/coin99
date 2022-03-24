using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    public class PostCategoriesController : ApiController
    {
        private MyDbContext db = new MyDbContext();

        // GET: api/PostCategories
        [Route("~/api/post-categories")]
        [HttpGet]
        [ResponseType(typeof(PostCategories))]
        public IHttpActionResult GetPostCategoryes()
        {
            var postCategoriesList = db.PostCategories.ToList();
            return Ok(postCategoriesList);
        }

        // GET: api/PostCategories/5
        [Route("~/api/postcategories/{id:int}")]
        [HttpGet]
        [ResponseType(typeof(PostCategories))]
        public IHttpActionResult GetPostCategories(int id)
        {
            PostCategories postCategories = db.PostCategoryes.Find(id);
            if (postCategorie == null)
            {
                return NotFound();
            }

            return Ok(postCategorie);
        }

        // PUT: api/PostCategories/5
        [Route("~/api/postcategories/{id:int}")]
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPostCategorie(int id, PostCategories postCategories)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != postCategories.Id)
            {
                return BadRequest();
            }

            db.Entry(postCategories).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostCategoriesExists(id))
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

        // POST: api/PostCategories
        [ResponseType(typeof(PostCategories))]
        [Route("~/api/postcategories")]
        [HttpPost]
        public IHttpActionResult PostPostCategories(PostCategorie postCategorie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PostCategories.Add(postCategories);
            db.SaveChanges();

            return Ok(postCategories);
        }

        // DELETE: api/PostCategories/5
        [Route("~/api/postcategories/{id:int}")]
        [HttpDelete]
        [ResponseType(typeof(PostCategories))]
        public IHttpActionResult DeletePostCategories(int id)
        {
            PostCategories postCategories = db.PostCategories.Find(id);
            if (postCategorie == null)
            {
                return NotFound();
            }

            db.PostCategories.Remove(postCategories);
            db.SaveChanges();

            return Ok(postCategories);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
        
            base.Dispose(disposing);
        }

        private bool PostCategorieExists(int id)
        {
            return db.PostCategories.Count(e => e.Id == id) > 0;
        }
    }
}