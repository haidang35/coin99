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
        [Route("~/api/postcategories")]
        [HttpGet]
        [ResponseType(typeof(PostCategorie))]
        public IHttpActionResult GetPostCategoryes()
        {
            var postCategoriesList = db.PostCategoryes.ToList();
            return Ok(postCategoriesList);
        }

        // GET: api/PostCategories/5
        [Route("~/api/postcategories/{id:int}")]
        [HttpGet]
        [ResponseType(typeof(PostCategorie))]
        public IHttpActionResult GetPostCategorie(int id)
        {
            PostCategorie postCategorie = db.PostCategoryes.Find(id);
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
        public IHttpActionResult PutPostCategorie(int id, PostCategorie postCategorie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != postCategorie.Id)
            {
                return BadRequest();
            }

            db.Entry(postCategorie).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostCategorieExists(id))
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
        [ResponseType(typeof(PostCategorie))]
        [Route("~/api/postcategories")]
        [HttpPost]
        public IHttpActionResult PostPostCategorie(PostCategorie postCategorie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PostCategoryes.Add(postCategorie);
            db.SaveChanges();

            return Ok(postCategorie);
        }

        // DELETE: api/PostCategories/5
        [Route("~/api/postcategories/{id:int}")]
        [HttpDelete]
        [ResponseType(typeof(PostCategorie))]
        public IHttpActionResult DeletePostCategorie(int id)
        {
            PostCategorie postCategorie = db.PostCategoryes.Find(id);
            if (postCategorie == null)
            {
                return NotFound();
            }

            db.PostCategoryes.Remove(postCategorie);
            db.SaveChanges();

            return Ok(postCategorie);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PostCategorieExists(int id)
        {
            return db.PostCategoryes.Count(e => e.Id == id) > 0;
        }
    }
}