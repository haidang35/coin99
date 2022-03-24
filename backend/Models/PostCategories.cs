using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public enum CategoryType {}
    public enum PostCategoryStatus { }
    public class PostCategories
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public CategoryType CategoryType { get; set; }
        public PostCategoryStatus Status { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }
    }
}