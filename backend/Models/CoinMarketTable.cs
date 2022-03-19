using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class CoinMarketTable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string MarketCode { get; set; }
    }
}