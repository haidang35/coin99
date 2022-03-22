using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public enum TypeNotification
    {

    }
    public enum StatusNotification
    {
        Active = 1,
        Deactive = 0,
    }
    public class Notification
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public TypeNotification Type { get; set; }
        public int Status { get; set; } 
        public int SenderId { get; set; } 
        public int ReceiverId { get; set; } 
        public string Description { get; set; } 
        public DateTime CreateAt { get; set; } 
        public DateTime UpdateAt { get; set; } 
    }
}