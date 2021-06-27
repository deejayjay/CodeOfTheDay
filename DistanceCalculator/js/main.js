window.addEventListener("load", () => {
	// Get reference to the form controls
	const srcLat = document.querySelector("#sourceLatitude");
	const srcLong = document.querySelector("#sourceLongitude");
	const destLat = document.querySelector("#destinationLatitude");
	const destLong = document.querySelector("#destinationLongitude");

	document.querySelector("#btnMyLocation").addEventListener("click", e => {
		e.preventDefault();
		// Check if geolocation supported by the browser
		if (!navigator.geolocation) {
			console.error("The browser does not support geolocation!!!");
		} else {
			navigator.geolocation.getCurrentPosition(
				locationSuccess,
				locationError
			);
		}
	});

	document.querySelector("#formLocDetails").addEventListener("submit", e => {
		e.preventDefault();
		if (
			!srcLat.value.trim() ||
			!srcLong.value.trim() ||
			!destLat.value.trim() ||
			!destLong.value.trim()
		) {
			console.error("Please enter the source and destination details!!!");
		} else {
			console.log(
				findDistance(
					srcLat.value,
					srcLong.value,
					destLat.value,
					destLong.value,
					true
				)
			);
		}
	});

	function locationSuccess(location) {
		srcLat.value = location.coords.latitude;
		srcLong.value = location.coords.longitude;
	}

	function locationError() {
		console.error("Couldn't retrieve your location!!!");
	}

	// Calculates the distance from Src to Dest.
	// Returns value in KMs if isKMS is true, and in metres if isKMs is false
	function findDistance(latSrc, longSrc, latDest, longDest, isKMs) {
		/* 
			This function uses the Haversine Formula to calculate the distance between 
			two points on a sphere:
			
			a = sin²(ΔlatDifference/2) + cos(lat1).cos(lt2).sin²(ΔlonDifference/2)
			c = 2.atan2(√a, √(1−a))
			d = R.c

			where:
			ΔlatDifference ---> lat1 – lat2 (difference of latitude)
			ΔlonDifference ---> lon1 – lon2 (difference of longitude)
			R ----------------> radius of earth i.e 6371 KM or 6371000 metres
			d ----------------> distance computed between two points

			src: https://www.igismap.com/haversine-formula-calculate-geographic-distance-earth/
		*/

		const EARTH_RADIUS = 6371000; // Earth's radius in metres
		const radLatSrc = convertToRad(latSrc);
		const radLatDest = convertToRad(latDest);
		const radLatDiff = radLatDest - radLatSrc;
		const radLongDiff = convertToRad(longDest - longSrc);

		const a =
			Math.sin(radLatDiff / 2) * Math.sin(radLatDiff / 2) +
			Math.cos(radLatSrc) *
				Math.cos(radLatDest) *
				(Math.sin(radLongDiff / 2) * Math.sin(radLongDiff / 2));
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

		return isKMs
			? ((EARTH_RADIUS * c) / 1000).toFixed(2)
			: EARTH_RADIUS * c;
	}

	// Convert latitude/longitude from degrees to radians
	function convertToRad(degrees) {
		return (degrees * Math.PI) / 180;
	}
});
