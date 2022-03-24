using backend.Dtos;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public enum PostType
    {
        Free = 1,
        Premium = 2
    }

    public enum PostStatus
    {
        Active = 1,
        Deactive = 0
    }
    public class Post
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Thumbnail { get; set; }
        [Required]
        public string Body { get; set; }
         [Required]
        public int CategoryId { get; set; }
         [Required]
        public string Description { get; set; }
        [Required]
        public PostType PostType { get; set; }
        [Required]
        public int Authorld { get; set; }
        [Required]
        public PostStatus Status { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }


        public PostDto TOPostDto()
        {
            var postDto = new PostDto()
            {
                Title = this.Title,
                Thumbnail = this.Thumbnail,
                Body = this.Body,
                CategoryId = this.CategoryId,
                Description = this.Description,
                PostType = this.PostType,
                Authorld = this.Authorld,
                Status = this.Status,
                CreateAt = this.CreateAt,
                UpdateAt = this.UpdateAt
            };
            return postDto ;
        }
    }
}