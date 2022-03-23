using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public enum UserStatus
    {
        Active = 1, 
        Deactive = 0,
    }
    public class User
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public DateTime Bithday { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string IndentityNumber { get; set; }
        public string AccountType { get; set; }
        public UserStatus Status { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }
    }
}