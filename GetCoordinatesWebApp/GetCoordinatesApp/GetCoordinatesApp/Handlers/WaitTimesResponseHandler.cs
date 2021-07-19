using GetCoordinatesApp.Controllers;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace GetCoordinatesApp.Handlers
{
    public static class StaticItems
    {
        public static string EndPoint = "https://localhost:44379/api/"; // Change the Base Address before deploying to production
    }
    public class WaitTimesResponseHandler
    {
        /// <summary>
        /// Retrieves the WaitTimes Info from the Wait Times Web API
        /// </summary>
        /// <returns><see cref="AHSResponse"/> object which contains the WaitTimes info.</returns>
        public AHSResponse GetWaitTimesInfo()
        {
            try
            {
                using (WebClient webClient = new WebClient())
                {
                    webClient.BaseAddress = StaticItems.EndPoint; // Base URI for the requests made
                    webClient.Encoding = System.Text.Encoding.UTF8; // Important as avoiding specifying this can result in special characters being displayed in text of regular ones
                    var json = webClient.DownloadString("waittimes/en"); // Relative path to the api web page
                    var response = JsonConvert.DeserializeObject<AHSResponse>(json); // Deserialize the JSON to an object of type AHSResponse
                    return response;
                }
            }
            catch (WebException ex)
            {
                throw ex;
            }
        }
    }
}