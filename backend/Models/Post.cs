using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public enum PostType
    {

    }
    public class Post
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Body { get; set; }
        public int Category { get; set; }
        public string Description { get; set; }
        public PostType PostType { get; set; }
        public int Authorld { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }
    }
}