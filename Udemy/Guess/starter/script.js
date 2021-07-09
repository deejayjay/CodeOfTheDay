"use strict";

let score = 20;
let secretNumber = generateSecretNumber(20);
let highScore = 0;

document.querySelector(".btn.check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	// When there is no input
	if (!guess) {
		displayMessage("⛔ No number!");

		// When the player wins
	} else if (guess === secretNumber) {
		displayMessage("🎉 Correct Number!");
		document.querySelector(".number").textContent = secretNumber;
		document.querySelector(".number").style.width = "30rem";
		document.body.style.backgroundColor = "#60b347";
		updateHighScore(score);

		// When the guess is not equal to secretNumber
	} else {
		if (score > 1) {
			displayMessage(
				guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
			);
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("💥 You lost the game!");
			document.body.style.backgroundColor = "#C21E56";
			document.querySelector(".score").textContent = 0;
		}
	}
});

document.querySelector(".btn.again").addEventListener("click", function () {
	secretNumber = generateSecretNumber(20);
	score = 20;
	document.querySelector(".number").textContent = "?";
	displayMessage("Start guessing...");
	document.querySelector(".score").textContent = 20;
	document.querySelector(".guess").value = "";
	document.querySelector(".number").style.width = "15rem";
	document.body.style.backgroundColor = "#222";
});

function displayMessage(message) {
	document.querySelector(".message").textContent = message;
}

function generateSecretNumber(maxVal) {
	return Math.trunc(Math.random() * maxVal) + 1;
}

function updateHighScore(newScore) {
	if (newScore > highScore) {
		highScore = newScore;
		document.querySelector(".highscore").textContent = highScore;
	}
}
