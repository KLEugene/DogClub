const openModalBtn = document.getElementById("modal-open");
const closeModalBtn = document.querySelector("[data-modal-close]");
const backdropModal = document.querySelector(".backdrop");

openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);
backdropModal.addEventListener("click", toggleModal);
window.addEventListener('keydown', onEscKeyPress);

function toggleModal() {
  backdropModal.classList.toggle("is-hidden");
}

function onEscKeyPress(event) {
     if (event.code === "Escape") {
      window.removeEventListener("keydown", onEscKeyPress);
      if (!backdropModal.classList.contains('is-hidden') ) {
        backdropModal.classList.toggle("is-hidden");
      }
    }
}

