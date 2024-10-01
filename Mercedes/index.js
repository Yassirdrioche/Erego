let h1 = document.querySelectorAll("h1");
let aHref = document.querySelectorAll("a");
let description = document.querySelector(".description");
let title = document.querySelector(".title");
let dashEngine = document.querySelectorAll(".dash-engine");
let wave = document.getElementById("wave");

let button = document.querySelector(".body");
function toggleBlack() {
  document.body.style.background = "black";
  if (document.body.style.background === "black") {
    h1.forEach((el) => {
      el.style.color = "#d2d3d1c4";
    });
    description.style.color = "#d2d3d1c4";
    title.classList.add(".title");
    aHref.forEach((el) => {
      el.style.color = "#d2d3d1c4";
    });
    dashEngine.forEach((el) => {
      el.style.color = "#ffffffb4";
    });
  }
}
function toggleWhite() {
  document.body.style.background = "white";
  document.body.style.transition = "1.9s";
  document.body.style.transitionProperty = "background";
  document.body.style.transitionTimingFunction = "alternate";

  if (document.body.style.background === "white") {
    h1.forEach((el) => {
      el.style.color = "black";
    });
    description.style.color = "black";
    title.classList.add(".title_black");
    aHref.forEach((el) => {
      el.style.color = "black";
      el.addEventListener("mousemove", () => {
        el.style.color = "#ffd900";
        el.style.transitionDuration = "0.4s";
      });
      el.addEventListener("mouseout", () => {
        el.style.color = "black";
      });
    });
    dashEngine.forEach((el) => {
      el.style.color = "black";
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animated");

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const animateElements = () => {
    animatedElements.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add("in-view");
      }
    });
  };

  window.addEventListener("scroll", animateElements);
  animateElements(); // Trigger animation on page load
});
let myButton = document.getElementById("button");
let div = document.getElementById("toggle");
myButton.addEventListener("click", () => {
  div.classList.toggle("hidden");
});
