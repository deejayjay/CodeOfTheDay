window.addEventListener("load", function () {
	const btnGetCoordinates = document.querySelector(".btn-get-coordinates");
	const latitudeValue = document.querySelector(".latitude-value");
	const longitudeValue = document.querySelector(".longitude-value");

	btnGetCoordinates.addEventListener("click", function (e) {
		e.preventDefault();
		getCoordinates();
	});

	// Used to retrieve the user's location using Geolocation API
	function getCoordinates() {
		// If geolocation is not supported by the browser or is not enabled,
		// the value of navigator.geolocation will be null
		if (!navigator.geolocation) {
			console.error("The browser does not support geolocation!!!");
		} else {
			// Geolocation is supported and enabled

			const options = {
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 10000,
			};
			navigator.geolocation.getCurrentPosition(
				locationSuccess,
				locationError,
				options
			);
		}
	}

	// Callback function to be called if location was retrieved successfully
	function locationSuccess(location) {
		// Updated the latitude and longitude values
		latitudeValue.textContent = location.coords.latitude.toFixed(5);
		longitudeValue.textContent = location.coords.longitude.toFixed(5);

		// Display the latitude and longitude
		document.querySelector(".latitude").classList.remove("hidden");
		document.querySelector(".longitude").classList.remove("hidden");
	}

	// Callback function to be called in case error occurs
	function locationError() {
		console.error("Couldn't retrieve your location!!!");
	}
});
