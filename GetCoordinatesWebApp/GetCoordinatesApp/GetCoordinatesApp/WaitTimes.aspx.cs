using GetCoordinatesApp.Controllers;
using GetCoordinatesApp.Handlers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace GetCoordinatesApp
{
    public partial class WaitTimes : System.Web.UI.Page
    {

        #region Event Handlers Methods

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ddlUserLocation_SelectedIndexChanged(sender, e); // Reusing this method to load facilities for the default location - Calgary
            }
        }

        // Load WaitTimes Info for the Selected Location when the selected value in the User Location DropDownList changes
        protected void ddlUserLocation_SelectedIndexChanged(object sender, EventArgs e)
        {
            // 1. Retrieve the WaitTimes Info from the WaitTimes Web API
            AHSResponse waitTimesResponse = new AHSResponse();
            waitTimesResponse = RetrieveWaitTimesInfo(); 

            // This object will be used to bind data to rptWaitTimesEmergency and rptWaitTimesUrgent
            // and its value will be determined by the location selected by the user
            AHSFacilities facilitiesAtLocation = new AHSFacilities(); 

            // 2. Verify that the Wait Times info is available
            if (waitTimesResponse != null)
            { // WaitTimesResponse is available

                if (!waitTimesResponse.AreAHSFacilitiesNull())
                { // AHSFacilities details are available
                  
                    // 3. Choose the facilities based on the city selected by the user
                    switch (ddlUserLocation.SelectedValue)
                    {
                        case "Calgary":
                            facilitiesAtLocation = waitTimesResponse.Calgary; // Facilities in Calgary chosen
                            break;
                        case "Edmonton":
                            facilitiesAtLocation = waitTimesResponse.Edmonton; // Facilities in Edmonton chosen
                            break;
                        case "RedDeer":
                            facilitiesAtLocation = waitTimesResponse.RedDeer; // Facilities in RedDeer chosen
                            break;
                        case "Lethbridge":
                            facilitiesAtLocation = waitTimesResponse.Lethbridge; // Facilities in Lethbridge chosen
                            break;
                        case "MedicineHat":
                            facilitiesAtLocation = waitTimesResponse.MedicineHat; // Facilities in MedicineHat chosen
                            break;
                        default:
                            labelMessage.Text = $"Please make sure a valid location is selected..."; // Invalid selection
                            break;
                    }

                    // 4. Now, bind the wait times for the facilities at the selected location
                    BindWaitTimesRepeaters(facilitiesAtLocation); 
                }
                else // AHSFacilities details are unavailable
                {
                    labelMessage.Text = $"Could not load Wait Times for {ddlUserLocation.SelectedItem.Text}";
                }
            }
            else // WaitTimesResponse is unavailable
            {
                labelMessage.Text = $"Could not load Wait Times for {ddlUserLocation.SelectedItem.Text}";
            }
        }

        #endregion

        #region Helper Methods

        /// <summary>
        /// Retrieves the WaitTimes Info for all the facilities by calling the appropriate method in the 
        /// WaitTimesResponseHandler class.
        /// </summary>
        /// <returns><see cref="AHSResponse"/> object that contains all the wait times info.</returns>
        private AHSResponse RetrieveWaitTimesInfo()
        {
            try
            {
                AHSResponse waitTimesResponse = new AHSResponse();
                WaitTimesResponseHandler responseHandler = new WaitTimesResponseHandler();
                waitTimesResponse = responseHandler.GetWaitTimesInfo();
                return waitTimesResponse;
            }
            catch (Exception ex)
            {
                labelMessage.Text = GetExceptionDetails(ex);
                return null;
            }
        }

        /// <summary>
        /// Used to find the inner exception of a given exception.
        /// </summary>
        /// <param name="ex">The <see cref="Exception"/> whose inner exception needs to be returned.</param>
        /// <returns>The inner exception of the <see cref="Exception"/> passed as an argument</returns>
        private string GetExceptionDetails(Exception ex)
        {
            Exception current = ex;
            while (current.InnerException != null)
            {
                current = current.InnerException;
            }
            return current.Message;
        }

        /// <summary>
        /// Load WaitTimes details for Emergency and Urgent Care facilities for the given location to appropriate 
        /// repeaters.
        /// </summary>
        /// <param name="facilityLocation">The object containing the WaitTimes details for all facilities at the selected location.</param>
        private void BindWaitTimesRepeaters(AHSFacilities facilityLocation)
        {
            try
            {
                if (facilityLocation.Emergency != null)
                { // Emergency facility WaitTime info is available

                    // 1. Specify the data source for the repeater where 
                    // emergency facility details are supposed to be displayed
                    rptWaitTimesEmergency.DataSource = facilityLocation.Emergency;

                    // 2. Bind the data to the repeater to the data source
                    rptWaitTimesEmergency.DataBind();
                }

                if (facilityLocation.Urgent != null)
                { // Urgent Care facility WaitTime info is available

                    // 1. Specify the data source for the repeater where urgent care 
                    // facility details are supposed to be displayed
                    rptWaitTimesUrgent.DataSource = facilityLocation.Urgent;

                    // 2. Bind the data to the repeater to the data source
                    rptWaitTimesUrgent.DataBind();
                }
            }
            catch (Exception ex)
            {
                labelMessage.Text = $"Error occurred while trying to display wait times: {GetExceptionDetails(ex)}";
            }
        } 

        #endregion
    }
}