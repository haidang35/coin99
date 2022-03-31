using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public enum CategoryType
    {
        Free = 1,
        Premium = 2,
    }

    public enum PostCategoryStatus
    {
        Active = 1,
        Deactive = 0,
    }

    public class PostCategory
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required]
        public CategoryType CategoryType { get; set; }
        [Required]
        public PostCategoryStatus Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}