const openSorting = document.getElementById("open-sorting");
const sortingBackdrop = document.getElementById("sorting")
const sortText = document.getElementById("sort")
const sortList = document.getElementById("sort-list")
console.log(sortingBackdrop)
console.log(openSorting);
openSorting.addEventListener("click", toggleSorting)
sortingBackdrop.addEventListener("click", toggleSorting)
function toggleSorting() { 
sortingBackdrop.classList.toggle("is-hidden")
}