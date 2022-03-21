using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public enum RegistedStatus
    {
        Active = 1,
        Deactive = 0,
    }
    public class UserRegistedUpgrade
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int UpgradePackId { get; set; }
        public RegistedStatus Status { get; set; }
        public string Note { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }
    }
}