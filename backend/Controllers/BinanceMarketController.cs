using Binance.Net.Clients;
using Binance.Net.Interfaces;
using CryptoExchange.Net.Objects;
using CryptoExchange.Net.Sockets;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace backend.Controllers
{
    public class BinanceMarketController : ApiController
    {
        private BinanceSocketClient client = new BinanceSocketClient();
        [Route("api/binance-market")]
        [HttpGet]
        public void GetMarketPrice()
        {
			
		}
    }
}
