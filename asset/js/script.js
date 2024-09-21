const btnUp = document.getElementById("btnUp");
btnUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", () => {
  btnUp.style.opacity = window.scrollY > 400 ? "1" : "0";
  btnUp.disabled = window.scrollY > 400 ? false : true;
});
