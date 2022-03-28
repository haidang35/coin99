using backend.Dtos;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public enum UserStatus
    {
        Active = 1, 
        Deactive = 0,
    }

    public enum AccountType
    {
        Normal = 1,
        Premium = 2
    }
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public DateTime Birthday { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public AccountType AccountType { get; set; }
        [Required]
        [JsonIgnore]
        public string Password { get; set; }
        public UserStatus Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public UserDto ToUserDto()
        {
            return new UserDto()
            {
                Id = this.Id,
                FullName = this.FullName,
                Birthday = this.Birthday,
                Email = this.Email,
                PhoneNumber = this.PhoneNumber,
                AccountType = this.AccountType,
                Status = this.Status,
                CreatedAt = this.CreatedAt,
                UpdatedAt = this.UpdatedAt,
            };
        }
    }
}