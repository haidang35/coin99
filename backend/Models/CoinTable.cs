using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public enum CoinTableType { }
    public class CoinTable
    {
        public int Id { get; set; }
        public string CoinName { get; set; }
        public CoinTableType Type { get; set; }
        public double Price { get; set; }
        public double Change24Price { get; set; }
        public double Volumn24h { get; set; }
        public double MarketCap { get; set; }
        public string Description { get; set; }
        public int MarketId { get; set; }
    }
}