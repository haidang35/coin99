using backend.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace backend.Dtos
{
 
    public class PostDto
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Thumbnail { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        public int Category { get; set; }
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

        public Post ToPost()
        {
            var post = new Post()
            {
                Title = this.Title,
                Thumbnail = this.Thumbnail,
                Body = this.Body,
                Category = this.Category,
                Description = this.Description,
                PostType = this.PostType,
                Authorld = this.Authorld,
                Status = this.Status,
                CreateAt = this.CreateAt,
                UpdateAt = this.UpdateAt

            };
            return post;
        }
    }
}