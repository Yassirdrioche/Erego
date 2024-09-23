const dropDown = document.querySelector("#drop-down");
const dropItems = document.querySelector("#drop-items");
const arrowUp = document.querySelector("#angledown");

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
