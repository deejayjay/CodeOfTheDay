"use strict";

window.addEventListener("load", function (e) {
    // Selecting elements
    const player0El = document.querySelector(".player--0");
    const player1El = document.querySelector(".player--1");
    const score0El = document.getElementById("score--0");
    const score1El = document.getElementById("score--1");
    const current0El = document.getElementById("current--0");
    const current1El = document.getElementById("current--1");
    const diceEl = document.querySelector(".dice");
    const btnNew = document.querySelector(".btn--new");
    const btnRoll = document.querySelector(".btn--roll");
    const btnHold = document.querySelector(".btn--hold");

    // Starting conditions
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add("hidden");

    let scores, currentScore, activePlayer, playing;

    const init = function () {
        score0El.textContent = 0;
        score1El.textContent = 0;
        current0El.textContent = 0;
        current1El.textContent = 0;

        scores = [0, 0];
        currentScore = 0;
        activePlayer = 0; // Player 1 is represented by value 0 & PLayer 2 by value 1
        playing = true;

        diceEl.classList.add("hidden");
        player0El.classList.remove("player--winner");
        player1El.classList.remove("player--winner");
        player0El.classList.add("player--active"); // Make Player 1 the active player
        player1El.classList.remove("player--active");
    };

    const switchPlayer = function () {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer ? 0 : 1;
        currentScore = 0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
    };

    init();

    // Rolling dice functionality
    btnRoll.addEventListener("click", function () {
        if (playing) {
            // Roll the dice only if playing is true
            // 1. Generating a random dice roll
            const dice = Math.trunc(Math.random() * 6) + 1;

            // 2. Display dice
            diceEl.classList.remove("hidden");
            diceEl.src = `img/dice-${dice}.png`;

            // 3. Check if rolled 1: If true, switch to the other Player
            if (dice !== 1) {
                // Add dice to current score
                currentScore += dice;
                document.getElementById(
                    `current--${activePlayer}`
                ).textContent = currentScore;
            } else {
                // Switch to the next player
                switchPlayer();
            }
        }
    });

    btnHold.addEventListener("click", function () {
        if (playing) {
            // Hold the score if playing is true
            // 1. Add the active player's current score to their total score
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent =
                scores[activePlayer];

            // 2. Has the player reached/passed the winning score (100)
            if (scores[activePlayer] >= 100) {
                // Yes - Finish the game
                playing = false; // Finish the game
                diceEl.classList.add("hidden");
                document
                    .querySelector(`.player--${activePlayer}`)
                    .classList.add("player--winner");
                document
                    .querySelector(`.player--${activePlayer}`)
                    .classList.remove("player--active");
            } else {
                // No - Switch to the next player
                switchPlayer();
            }
        }
    });

    btnNew.addEventListener("click", init);
});
