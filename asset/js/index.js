const dropDown = document.querySelector("#drop-down");
const dropItems = document.querySelector("#drop-items");
dropDown.addEventListener("click", () => {
  dropItems.classList.toggle("show");
});
const seminaireDrop = document.getElementById("seminairedrop");
const seminaireItems = document.getElementById("seminaireitme");
seminaireDrop.addEventListener("click", () => {
  seminaireItems.classList.toggle("show");
});
