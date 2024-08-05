const openModalBtn = document.getElementById("modal-open");
const closeModalBtn = document.querySelector("[data-modal-close]")
const backdropModal = document.querySelector(".backdrop")
console.log(backdropModal)
openModalBtn.addEventListener("click",toggleModal);
closeModalBtn.addEventListener("click", toggleModal);
function toggleModal() { 
    console.log("fromModal")
backdropModal.classList.toggle("is-hidden")
}