"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

btnCloseModal.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

function openModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

function closeModal() {
    if (!modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
}
