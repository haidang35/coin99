using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public enum UPPStatus
    {
        Active = 1,
        Deactive = 0,
    }
    public class UpgradePackPrice
    {
        public int Id { get; set; }
        public int UpgradePackId { get; set; }
        public double Price { get; set; }
        public int Period { get; set; }
        public int PeriodType { get; set; }
        public UPPStatus Status { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }

    }
}