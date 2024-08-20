const openSorting = document.getElementById("open-sorting");
const sortingBackdrop = document.getElementById("sorting")
const sortText = document.getElementById("sort")
const sortList = document.getElementById("sort-list")

console.log(sortingBackdrop)
console.log(openSorting);

openSorting.addEventListener("click", toggleSorting)
sortingBackdrop.addEventListener("click", toggleSorting)
sortList.addEventListener("click", choiceEvent)

function choiceEvent(event) { 
    console.dir(event.target)
    sortText.innerHTML = event.target.innerHTML;
}
function toggleSorting() { 
sortingBackdrop.classList.toggle("is-hidden")
}
