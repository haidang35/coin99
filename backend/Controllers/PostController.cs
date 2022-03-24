using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using backend.Data;
using backend.Dtos;
using backend.Models;

namespace backend.Controllers
{
    [EnableCors(origins:"https://coin99.cf, http://localhost:3000",headers:"*", methods:"*")]
    public class PostController : ApiController
    {
        private MyDbContext db = new MyDbContext();

        // GET: api/Post
        [Route("~/api/posts")]
        [HttpGet]
        [ResponseType(typeof(ICollection<Post>))]
        public IHttpActionResult GetPosts()
        {
            var postList = db.Posts.ToList();
            return Ok(postList);
        }
        // GET: api/Post/
        [Route("~/api/posts/{id:int}")]
        [HttpGet]
        [ResponseType(typeof(Post))]
        public IHttpActionResult GetPost(int id)
        {
            Post post = db.Posts.Find(id);
            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        // PUT: api/Post/5
        [Route("~/api/posts/{id:int}")]
        [HttpPut]
        [ResponseType(typeof(Post))]
        public IHttpActionResult PutPost(int id, PostDto postDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var postDetails = db.Posts.Find(id);
            if (postDetails == null)
            {
                return BadRequest();
            }
            postDetails.Title = postDto.Title;
            postDetails.Thumbnail = postDto.Thumbnail;
            postDetails.Body = postDto.Body;
            postDetails.Category = postDto.Category;
            postDetails.Description = postDto.Description;
            postDetails.PostType = postDto.PostType;
            postDetails.Authorld = postDto.Authorld;
            postDetails.UpdateAt = DateTime.Now;
            db.Entry(postDetails).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(postDetails);
        }

        // POST: api/Post
        [Route("~/api/posts")]
        [HttpPost]
        [ResponseType(typeof(Post))]
        public IHttpActionResult PostPost(Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newPost = db.Posts.Add(post);
            db.SaveChanges();

            return Ok(newPost);
        }

        // DELETE: api/Post/5
        [Route("~/api/posts/{id:int}")]
        [ResponseType(typeof(Post))]
        [HttpDelete]
        public IHttpActionResult DeletePost(int id)
        {
            Post post = db.Posts.Find(id);
            if (post == null)
            {
                return NotFound();
            }

            db.Posts.Remove(post);
            db.SaveChanges();

            return Ok(post);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PostExists(int id)
        {
            return db.Posts.Count(e => e.Id == id) > 0;
        }
        [Route("~/api/posts/{id:int}")]
        [HttpPatch]
        [ResponseType(typeof(Post))]
        public IHttpActionResult PatchPost(int id)
        {
            Post post = db.Posts.Find(id);
            if (post == null)
            {
                return NotFound();
            }
            db.Entry(post).State = EntityState.Modified;
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return Ok(post);
            
        }

        [Route("~/api/test-upload-file")]
        [HttpPost]
        [ResponseType(typeof(string))]
        public IHttpActionResult TestFileUpload()
        {
            Debug.WriteLine("Oke 0");
            //Create the Directory.
            string path = HttpContext.Current.Server.MapPath("~/Uploads/");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            Debug.WriteLine("Oke 1");
            //Fetch the File.
            HttpPostedFile postedFile = HttpContext.Current.Request.Files["myFile"];
            Debug.WriteLine("Oke 2");
            //Fetch the File Name.
            /* string fileName = Path.GetFileName(postedFile.FileName);*//*

            //Save the File.
            *//*postedFile.SaveAs(path + fileName);*/

            if (postedFile.ContentLength > 0)
            {
                string[] FileExtension = new string[] { ".jpg", ".png", ".jpeg", ".gif" };
                if (FileExtension.Contains(postedFile.FileName.Substring(postedFile.FileName.LastIndexOf("."))))
                {
                    string imageName =  postedFile.FileName.Substring(postedFile.FileName.LastIndexOf("."));
                    string PathDir = "~/Uploads";
                    string pathImage = Path.Combine(HttpContext.Current.Server.MapPath(PathDir), imageName);
                    postedFile.SaveAs(pathImage);
                    return Ok(imageName);
                }
            }

            //Send OK Response to Client.
            return Ok("ok");
        }

    }
}