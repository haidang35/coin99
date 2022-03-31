using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace backend.Dtos
{
    public class UserTokenDto
    {
        public string FullName { get; set; }
        public DateTime Bithday { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string IndentityNumber { get; set; }
        public string AccountType { get; set; }
        public string AccessToken { get; set; }
        public string TokenType { get; set; }
        public string ExpiresIn { get; set; }
    }
}