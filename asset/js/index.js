const dropDown = document.querySelector("#drop-down");
const dropItems = document.querySelector("#drop-items");
const arrowUp = document.querySelector("#angledown");
const navbar = document.querySelector(".section-nav");
const loader = document.querySelector(".preloader");

dropDown.addEventListener("click", () => {
  arrowUp.classList.toggle("rotate");
  dropItems.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    arrowUp.classList.add("rotate");
    dropItems.classList.add("show");
  }
});
function showHide() {
  navbar.classList.toggle("navToggle");
}
window.scrollTo({ top: 0, behavior: "smooth" });
window.addEventListener("load", () => {
  loader.style.display = "none";
});
