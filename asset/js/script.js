const btnUp = document.getElementById("btnUp");
btnUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
