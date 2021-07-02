window.addEventListener("load", () => {
	const URL = "/assets/en.json";

	fetch(URL)
		.then(response => response.json())
		.then(data => DisplayWaitTImes(data))
		.catch(error => {
			console.error("Couldn't fetch the data!!!");
		});

	function DisplayWaitTImes(waitTimesInfo) {
		const waitTimes = waitTimesInfo.WaitTimes;
		let template = "";

		for (const waitTime in waitTimes) {
			const facilities = waitTimes[`${waitTime}`];

			template += `
                        <h2>${capitalizeWord(waitTime)}</h2>
                        <ul>
            `;

			for (const facility in facilities) {
				const facilityInfo = facilities[`${facility}`];
				template += `<li>${facilityInfo.name} - ${facilityInfo.note}</li>`;
				// console.log(facilities[`${facility}`]);
			}
			template += `</ul>`;
		}
		document
			.querySelector(".content")
			.insertAdjacentHTML("beforeend", template);
	}

	function capitalizeWord(word) {
		return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
	}
});
