using backend.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace backend.Services
{
    public class BinanceService
    {
        private static FirebaseService firebaseService = new FirebaseService();
        private string baseStreamPath = "wss://stream.binance.com:9443/";
        private string baseEndpoint = "https://api.binance.com";
        private string base24hTickerPriceChange = "/api/v3/ticker/24hr";
        private string baseStream24hPriceChange = "ws/ethbtc@ticker";

        public async Task ReceiveDataFromStreamWebsocket(string streamName)
        {
            using (ClientWebSocket websocket = new ClientWebSocket())
            {
                /* websocket.Options.KeepAliveInterval = TimeSpan.FromMinutes(2);*/
                string url = this.baseStreamPath + streamName;
                Debug.WriteLine("Connecting to: " + url);
                await websocket.ConnectAsync(new Uri(url), CancellationToken.None);

                /* string message = "Hello World";
                 Debug.WriteLine("Sending message: " + message);
                 byte[] messageBytes = Encoding.UTF8.GetBytes(message);
                 await websocket.SendAsync(new ArraySegment<byte>(messageBytes), WebSocketMessageType.Text, true, CancellationToken.None);*/
                while (websocket.State == WebSocketState.Open)
                {
                    byte[] incomingData = new byte[1024];
                    WebSocketReceiveResult result = await websocket.ReceiveAsync(new ArraySegment<byte>(incomingData), CancellationToken.None);

                    if (result.CloseStatus.HasValue)
                    {
                        Debug.WriteLine("Closed; Status: " + result.CloseStatus + ", " + result.CloseStatusDescription);
                    }
                    else
                    {
                        var data = Encoding.UTF8.GetString(incomingData, 0, result.Count);
                        Debug.WriteLine("data " + data);
                        var dataConverted = JsonConvert.DeserializeObject<object>(data);
                    }
                    await Task.Delay(1000);
                }
            }
        }

        public async Task Get24hTickerPriceChange()
        {
            HttpClient httpClient = new HttpClient();
            httpClient.BaseAddress = new Uri(baseEndpoint);
            httpClient.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));
            // List data response.
            HttpResponseMessage response = httpClient.GetAsync(base24hTickerPriceChange).Result;  // Blocking call! Program will wait here until a response is received or a timeout occurs.
            if (response.IsSuccessStatusCode)
            {
                // Parse the response body.
                var dataObjects = response.Content.ReadAsAsync<IEnumerable<BinanceCoin>>().Result.Take(50).ToList();  //Make sure to add a reference to System.Net.Http.Formatting.dll
                foreach(var coinChange in dataObjects)
                {
                    await firebaseService.Insert("coins/binance", coinChange);
                }
            }
            else
            {
                Debug.WriteLine("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase);
            }

        }

        public async Task Subcribe24PriceChange()
        {
            using (ClientWebSocket websocket = new ClientWebSocket())
            {
                string url = this.baseStreamPath + baseStream24hPriceChange;
                Debug.WriteLine("Connecting to: " + url);
                await websocket.ConnectAsync(new Uri(url), CancellationToken.None);
                while (websocket.State == WebSocketState.Open)
                {
                    byte[] incomingData = new byte[1024];
                    WebSocketReceiveResult result = await websocket.ReceiveAsync(new ArraySegment<byte>(incomingData), CancellationToken.None);

                    if (result.CloseStatus.HasValue)
                    {
                        Debug.WriteLine("Closed; Status: " + result.CloseStatus + ", " + result.CloseStatusDescription);
                    }
                    else
                    {
                        var data = Encoding.UTF8.GetString(incomingData, 0, result.Count);
                        var dataConverted = JsonConvert.DeserializeObject<BinanceMarketTickersStream>(data);
                        var binanceCoin = new BinanceCoin()
                        {
                            priceChange = dataConverted.p,
                            priceChangePercent = dataConverted.P,
                            lastPrice = dataConverted.c,
                        };
                        Debug.WriteLine(dataConverted);
                    }
                    await Task.Delay(1000);
                }
            }
        }
    }
}