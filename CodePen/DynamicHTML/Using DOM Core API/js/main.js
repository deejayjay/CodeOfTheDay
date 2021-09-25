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
    function AddTableRow(name) {
        // create DOM elements
        const row = document.createElement("div");
        const nameCol = document.createElement("div");
        const hiCol = document.createElement("div");
        const delCol = document.createElement("div");
        const iconGreet = document.createElement("i");
        const iconDelete = document.createElement("i");
        const textName = document.createTextNode(name);

        // Set classes and attributes
        row.classList.add("row");
        nameCol.classList.add("column-name");
        hiCol.classList.add("column-hi");
        delCol.classList.add("column-delete");
        iconGreet.classList.add("fas", "fa-hand-paper", "icon-greet");
        iconDelete.classList.add("fas", "fa-trash-alt", "icon-delete");
        iconGreet.title = "Say hi to " + name;
        iconDelete.title = "Delete " + name;

        // Add click event handlers for iconGreet
        iconGreet.addEventListener("click", () => {
            displayMessage("Hi " + name);
        });

        // Add click event handlers for iconDelete
        iconDelete.addEventListener("click", (e) => {
            const rowToDelete = e.target.parentNode.parentNode;
            rowToDelete.remove();
        });

        // Combine the DOM elements to create a table row
        nameCol.appendChild(textName);
        hiCol.appendChild(iconGreet);
        delCol.appendChild(iconDelete);
        row.appendChild(nameCol);
        row.appendChild(hiCol);
        row.appendChild(delCol);

        // Now, add the newly created row to the .content <div>
        document.body.querySelector(".content").append(row);
    }

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
