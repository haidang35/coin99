using backend.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace backend.Dtos
{
    public class PostCategoryDto
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required]
        public CategoryType CategoryType { get; set; }
        [Required]
        public PostCategoryStatus Status { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public PostCategory ToPostCategory()
        {
            return new PostCategory()
            {
                Id = this.Id,
                Name = this.Name,
                Description = this.Description,
                CategoryType = this.CategoryType,
                Status = this.Status,
            };
        }
    }
}