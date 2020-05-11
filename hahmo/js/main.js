//Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-items");

//Set initial state of menu
let menuKaytossa = false;

menuBtn.addEventListener("click", menunKasittely);

function menunKasittely() {
  console.log("klik");
  if (!menuKaytossa) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    menuKaytossa = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    menuKaytossa = false;
  }
}
