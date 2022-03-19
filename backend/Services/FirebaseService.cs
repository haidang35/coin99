using FireSharp;
using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace backend.Services
{
    public class FirebaseService
    {
        private static IFirebaseConfig config = new FirebaseConfig()
        {
            AuthSecret = "P1YjtIUHU92Hvlxotv6vK5zfrVtFc5B6Cyqs2Ryh",
            BasePath = "https://coin99-24160-default-rtdb.asia-southeast1.firebasedatabase.app/",
        };
        private  IFirebaseClient client = new FirebaseClient(config);

        public async Task<PushResponse> Insert(string path, object data)
        {
            var response = await client.PushAsync(path, data);
            return response;
        }

        public  async Task<FirebaseResponse> Get(string path)
        {
            var response = await client.GetAsync(path);
            return response;
        }

        public  async Task<FirebaseResponse> Update(string path, object data)
        {
            var response = await client.UpdateAsync(path, data);
            return response;
        }

        public  async Task<FirebaseResponse> Delete(string path)
        {
            var response = await client.DeleteAsync(path);
            return response;
        }
    }
}