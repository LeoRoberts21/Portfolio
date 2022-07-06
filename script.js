"use strict";

let today = new Date();
const day = String(today.getDay());

if (day === 0) {
  document.querySelector('.current-day').textContent = Sunday;
} else if (day === 1) {
  document.querySelector('.current-day').textContent = Monday;
} else if (day === 2) {
  document.querySelector('.current-day').textContent = Tuesday;
} else if (day === 3) {
  document.querySelector('.current-day').textContent = Wednesday;
}
console.log(day)