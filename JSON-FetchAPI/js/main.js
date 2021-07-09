window.addEventListener("load", () => {
	const URL = "/assets/en.json";

	// Fetch JSON data from the file at the given URL
	fetch(URL)
		.then(response => response.json()) // returns the JSON body content from the response
		.then(data => DisplayWaitTimes(data)) // format and display the body content
		.catch(error => {
			console.error("Couldn't fetch the data!!!");
		});

	// This function accepts the WaitTimes Information in JSON,
	// then formats it and displays it in the web page
	function DisplayWaitTimes(waitTimesInfo) {
		console.log(waitTimesInfo);
		const waitTimes = waitTimesInfo.WaitTimes;
		let template = "";

		// Iterate through each city in the JSON data
		for (const city in waitTimes) {
			const facilities = waitTimes[`${city}`];

			template += `
                        <h2>${capitalizeWord(city)}</h2>
                        <ul>
            `;

			// Display the details of each facility in each city
			for (const facility in facilities) {
				const facilityInfo = facilities[`${facility}`];
				template += `<li>${facilityInfo.name} - ${facilityInfo.note}</li>`;
			}
			template += `</ul>`;
		}

		// Insert the parsed JSON data into the .content <div>
		document
			.querySelector(".content")
			.insertAdjacentHTML("beforeend", template);
	}

	// Capitalize the word passed as argument
	function capitalizeWord(word) {
		return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
	}
});
