using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GetCoordinatesApp.Controllers
{
    public class AHSResponse
    {
        public AHSResponse()
        {

        }

        public AHSFacilities Calgary { get; set; }
        public AHSFacilities Edmonton { get; set; }
        public AHSFacilities RedDeer { get; set; }
        public AHSFacilities Lethbridge { get; set; }
        public AHSFacilities MedicineHat { get; set; }

        public bool AreAHSFacilitiesNull()
        {
            return (this.Calgary == null || this.Edmonton == null || this.RedDeer == null || this.Lethbridge == null || this.MedicineHat == null || this == null);
        }
    }

    public class AHSFacilities
    {
        public AHSFacilities()
        {

        }

        public List<AHSFacility> Emergency { get; set; }
        public List<AHSFacility> Urgent { get; set; }
    }

    public class AHSFacility
    {
        public AHSFacility()
        {
        }

        public string Name { get; set; }
        public string Category { get; set; }
        public string WaitTime { get; set; }
        public string URL { get; set; }
        public string Note { get; set; }
        public bool TimesUnavailable { get; set; }
    }
}