"use strict";

const nav = document.querySelector(".nav-bar");
const leo = document.querySelector(".leo");
const hamburger = document.querySelector(".hamburger");
const white = document.querySelector(".white");
const white2 = document.querySelector(".white2");
const white3 = document.querySelector(".white3");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY && lastScrollY > 0.1) {
    nav.classList.add("nav--hidden", "navbar2");
    leo.classList.add("leo2");
    hamburger.classList.add("hamburger2");
    white.classList.add("nowhite");
    white2.classList.add("nowhite");
    white3.classList.add("nowhite");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;

  if (window.scrollY < 0.5) {
    nav.classList.remove("navbar2");
    hamburger.classList.remove("hamburger2");
    leo.classList.remove("leo2");
    white.classList.remove("nowhite");
    white2.classList.remove("nowhite");
    white3.classList.remove("nowhite");
  }
});


/*--------------------PHONE MENU---------------*/

const modal = document.querySelector('.modal1');
const overlay = document.querySelector('.overlay1');
const btnsHideModal = document.querySelector('.close-modal1')
const btnsShowModal = document.querySelectorAll('.show-modal1');




const openModal = function() {
    modal.classList.remove('hidden1');
    overlay.classList.remove('hidden1');
  };

const closeModal = function() {
    modal.classList.add('hidden1');
    overlay.classList.add('hidden1');
}

for(let i = 0; i < btnsShowModal.length; i++)
 btnsShowModal[i].addEventListener('click', openModal);

btnsHideModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

if(e.key === 'Escape' && !modal.classList.contains('hidden1')) {
closeModal();
}
});

