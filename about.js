"use strict";


const nav = document.querySelector(".nav-bar");
const leo = document.querySelector(".leo");
const hamburger = document.querySelector(".hamburger");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY && lastScrollY > 0.1) {
    nav.classList.add("nav--hidden", "navbar2");
    leo.classList.add("leo2");
    hamburger.classList.add("hamburger2");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;

  if (window.scrollY < 0.5) {
    nav.classList.remove("navbar2");
    hamburger.classList.remove("hamburger2");
    leo.classList.remove("leo2");
  }
});
