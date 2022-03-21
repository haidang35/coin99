using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using backend.Services;
using Binance.Net.Clients;
using FireSharp;
using FireSharp.Config;
using Newtonsoft.Json;

namespace backend.Controllers
{
    public class HomeController : Controller
    {
        private BinanceService binanceService = new BinanceService();
        private FirebaseService firebaseService = new FirebaseService();
        
        public async Task<ActionResult> Index()
        {
            /*await firebaseService.Delete("coins/binance");*/
            /*await binanceService.Get24hTickerPriceChange();*/
            /*await binanceService.Subcribe24PriceChange();*/
            return View();
        }

    }
}
