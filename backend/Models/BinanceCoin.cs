using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class BinanceCoin
    {
        public string symbol { get; set; }
        public float priceChange { get; set; }
        public float priceChangePercent {get; set; }
        public float weightedAvgPrice { get; set; }
        public float prevClosePrice { get; set; }
        public double lastPrice { get; set; }
        public float lastQty { get; set; }
        public double bidPrice { get; set; }
        public float bidQty { get; set; }
        public double askPrice { get; set; }
        public double openPrice { get; set; }
        public double highPrice { get; set; }
        public double lowPrice { get; set; }
        public double volume { get; set; }
        public double quoteVolume { get; set; }
        public string openTime { get; set; }
        public string closeTime { get; set; }
        public int firstId { get; set; }
        public int lastId { get; set; }
        public int count { get; set; }
    }
}