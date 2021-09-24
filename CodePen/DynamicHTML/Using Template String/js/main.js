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
        let template = `<div class="row">
                            <div class="column-name">${name}</div>
                            <div class="column-hi">
                                <i class="fas fa-hand-paper icon-greet" title="Say hi to ${name}">
                                </i>
                            </div>
                            <div class="column-delete">
                                <i class="fas fa-trash-alt icon-delete" title="Delete"></i>
                            </div>
                        </div>`;

        const row = createElementFromTemplate(template);
        row.querySelector(".icon-greet").addEventListener("click", () => {
            displayMessage(`Hi ${name}`);
        });
        row.querySelector(".icon-delete").addEventListener("click", (e) => {
            const rowToDelete = e.target.parentNode.parentNode;
            rowToDelete.remove();
        });
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

    // Method that accepts a template string and returns an element node
    function createElementFromTemplate(templateString) {
        const dfragment = document
            .createRange()
            .createContextualFragment(templateString.trim());
        return dfragment.firstChild;
    }

    // Method to hide the message modal window
    function hideMessage() {
        document.querySelector(".message > h3").textContent = "";
        document.querySelector("div.overlay").classList.add("hidden");
    }
});
