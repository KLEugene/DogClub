const openMenu = document.getElementById("open-mobile-menu")
const closeMenu = document.getElementById("mobile-menu-close");
const mobileMenu = document.getElementById("mobile-menu")

openMenu.addEventListener("click", toggleMobileMenu);
closeMenu.addEventListener("click", toggleMobileMenu);
mobileMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() { 
    mobileMenu.classList.toggle("is-open")
}