"use strict";


// DAY READING

let today = new Date();
let day = String(today.getDay());

console.log(day);

if (day == 0) {
  document.querySelector('.current-day').textContent = 'Sunday';
} else if (day == 1) {
  document.querySelector('.current-day').textContent = 'Monday';
} else if (day == 2) {
  document.querySelector('.current-day').textContent = 'Tuesday';
} else if (day == 3) {
  document.querySelector('.current-day').textContent = 'Wednesday';
} else if (day == 4) {
  document.querySelector('.current-day').textContent = 'Thursday';
} else if (day == 5) {
  document.querySelector('.current-day').textContent = 'Friday';
} else if (day == 6) {
  document.querySelector('.current-day').textContent = 'Saturday';
}


// HIDDEN NAV-BAR

const nav = document.querySelector('.nav-bar');
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if(lastScrollY < window.scrollY && lastScrollY > 0.1) {
    nav.classList.add("nav--hidden", "navbar2");
  }else {
    nav.classList.remove("nav--hidden");
  };

  lastScrollY = window.scrollY;

  if(window.scrollY < 0.5) {
    nav.classList.remove("navbar2");
  }



});