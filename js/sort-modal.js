const openSorting = document.getElementById("open-sorting");
const sortingBackdrop = document.getElementById("sorting");
const sortText = document.getElementById("sort");
const sortList = document.getElementById("sort-list");

openSorting.addEventListener("click", toggleSorting);
sortingBackdrop.addEventListener("click", toggleSorting);
sortList.addEventListener("click", choiceEvent);

function choiceEvent(event) {
  const elem = event.target.localName;
  if (elem.includes("ul")) return;
  if (elem.includes("li"))
    sortText.innerHTML = event.target.children[0].innerHTML;
  else sortText.innerHTML = event.target.parentElement.children[0].innerHTML;
}
function toggleSorting() {
  sortingBackdrop.classList.toggle("is-hidden");
}
