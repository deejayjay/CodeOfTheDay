window.addEventListener("load", () => {
    const txtBox = document.querySelector("input");
    const btnAdd = document.querySelector(".btn-add");
    btnAdd.addEventListener("click", (e) => {
        e.preventDefault();
        let name = txtBox.value;
        if (name.trim() !== "") {
            AddTableRow(name);
            txtBox.value = "";
        } else {
            displayMessage("Please enter a name");
        }
    });

    // If the name is not empty or white-space, add a new row to the table
    function AddTableRow(name) {}

    // If the cros (X) is clicked, close the message modal window
    document.querySelector(".message > i").addEventListener("click", () => {
        hideMessage();
    });

    // If Esc key is pressed, close the message modal window
    document.body.addEventListener("keydown", (e) => {
        if (e.key === "Escape") hideMessage();
    });

    // Method to display the message modal window
    function displayMessage(message) {
        document.querySelector(".message > h3").textContent = message;
        document.querySelector("div.overlay").classList.remove("hidden");
    }

    // Method to hide the message modal window
    function hideMessage() {
        document.querySelector(".message > h3").textContent = "";
        document.querySelector("div.overlay").classList.add("hidden");
    }
});
