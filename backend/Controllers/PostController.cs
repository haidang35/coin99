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
using System.Security.Claims;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using backend.Data;
using backend.Dtos;
using backend.Helpers;
using backend.Models;

namespace backend.Controllers
{
    [Authorize]
    public class PostController : ApiController
    {
        private MyDbContext db = new MyDbContext();

        // GET: api/Post
        [Route("~/api/posts")]
        [HttpGet]
        [ResponseType(typeof(ICollection<Post>))]
        public IHttpActionResult GetPosts(string status, string search)
        {
            var postList = new List<Post>();
            Debug.WriteLine($"Status {status}");
            if (!string.IsNullOrEmpty(status))
            {
                switch(status)
                {
                    case "active":
                        postList = db.Posts.Where(p => p.Status == PostStatus.Active).OrderByDescending(u => u.CreateAt).ToList();
                        break;
                    case "deactive":
                        postList = db.Posts.Where(p => p.Status == PostStatus.Deactive).OrderByDescending(u => u.CreateAt).ToList();
                        break;
                    case "draft":
                        postList = db.Posts.Where(p => p.Status == PostStatus.Draft).OrderByDescending(u => u.UpdateAt).ToList();
                        break;
                    default:
                        break;
                }
            }
            if(!string.IsNullOrEmpty(search))
            {
                postList = postList.Where(p => p.Title.Contains(search)).OrderByDescending(u => u.CreateAt).ToList();
            }
            return Ok(postList);
        }

        [Route("~/api/posts/public")]
        [HttpGet]
        [ResponseType(typeof(ICollection<Post>))]
        [AllowAnonymous]
        public IHttpActionResult GetPostsPublic()
        {
            var posts = db.Posts.Where(p => p.Status == PostStatus.Active).OrderByDescending(u => u.CreateAt).ToList();
            return Ok(posts);
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


        [Route("~/api/posts/{slug}")]
        [HttpGet]
        [ResponseType(typeof(Post))]
        [AllowAnonymous]
        public IHttpActionResult GetPostBySlug(string slug)
        {
            var post = db.Posts.Where(p => p.Slug == slug).FirstOrDefault();
            if(post == null)
            {
                return BadRequest("Post doesn't exist");
            }
            var identity = HttpContext.Current.User.Identity as ClaimsIdentity;
            var currentUserIdentity = identity.FindFirst("currentUserId");
            Debug.WriteLine(currentUserIdentity);
            if(currentUserIdentity != null)
            {
                Debug.WriteLine("Check");
                var currentUserId = currentUserIdentity.Value;
                var currentUser = db.Users.Find(Int32.Parse(currentUserId));
                if (post.PostType == PostType.Premium && currentUser.AccountType != AccountType.Premium)
                {
                    return BadRequest("Account need update to premium account");
                }
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
            postDetails.Slug = XString.Slugify(postDto.Title);
            postDetails.Thumbnail = postDto.Thumbnail;
            postDetails.Body = postDto.Body;
            postDetails.CategoryId = postDto.CategoryId;
            postDetails.Description = postDto.Description;
            postDetails.PostType = postDto.PostType;
            postDetails.AuthorId = postDto.AuthorId;
            postDetails.UpdateAt = DateTime.Now;
            postDetails.Status = postDto.Status;
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
        public IHttpActionResult PostPost(PostDto postDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            postDto.Slug = XString.Slugify(postDto.Title);
            postDto.CreateAt = DateTime.Now;
            postDto.UpdateAt = DateTime.Now;
            var newPost = db.Posts.Add(postDto.ToPost());
            db.SaveChanges();
            return Ok(newPost);
        }

        [Route("~/api/posts/{id:int}/update-status")]
        [HttpGet]
        [ResponseType(typeof(Post))]
        public IHttpActionResult UpdateStatus(int id, string status)
        {
            Post post = db.Posts.Find(id);
            if(post == null)
            {
                return NotFound();
            }
            if(! string.IsNullOrEmpty(status))
            {
                switch(status)
                {
                    case "active":
                        post.Status = PostStatus.Active;
                        break;
                    case "deactive":
                        post.Status = PostStatus.Deactive;
                        break;
                    case "draft":
                        post.Status = PostStatus.Draft;
                        break;
                    default:
                        break;
                }
            }
            db.Entry(post).State = EntityState.Modified;
            db.SaveChanges();
            return Ok(post);
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
            //Fetch the File.
            HttpPostedFile postedFile = HttpContext.Current.Request.Files["myFile"];
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

        [Route("~/api/posts/upload-thumbnail")]
        [HttpPost]
        [ResponseType(typeof(string))]
        public string UploadFile()
        {
            string path = HttpContext.Current.Server.MapPath("~/Uploads/");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            HttpPostedFile postedFile = HttpContext.Current.Request.Files["fileUpload"];
            if (postedFile.ContentLength > 0)
            {
                string[] FileExtension = new string[] { ".jpg", ".png", ".jpeg", ".gif" };
                if (FileExtension.Contains(postedFile.FileName.Substring(postedFile.FileName.LastIndexOf("."))))
                {
                    string imageName = new DateTimeOffset(DateTime.UtcNow).ToUnixTimeSeconds() + postedFile.FileName.Substring(postedFile.FileName.LastIndexOf("."));
                    string PathDir = "~/Uploads";
                    string pathImage = Path.Combine(HttpContext.Current.Server.MapPath(PathDir), imageName);
                    postedFile.SaveAs(pathImage);
                    return $"/Uploads/{imageName}";
                }
            }
            return null;

        }

    }
}