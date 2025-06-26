// 'use strict';

// /**
//  * navbar toggle
//  */

// const overlay = document.querySelector("[data-overlay]");
// const navOpenBtn = document.querySelector("[data-nav-open-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const navCloseBtn = document.querySelector("[data-nav-close-btn]");
// const navLinks = document.querySelectorAll("[data-nav-link]");

// const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// const navToggleEvent = function (elem) {
//   for (let i = 0; i < elem.length; i++) {
//     elem[i].addEventListener("click", function () {
//       navbar.classList.toggle("active");
//       overlay.classList.toggle("active");
//     });
//   }
// }

// navToggleEvent(navElemArr);
// navToggleEvent(navLinks);



// /**
//  * header sticky & go to top
//  */

// const header = document.querySelector("[data-header]");
// const goTopBtn = document.querySelector("[data-go-top]");

// window.addEventListener("scroll", function () {

//   if (window.scrollY >= 200) {
//     header.classList.add("active");
//     goTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     goTopBtn.classList.remove("active");
//   }

// });
'use strict';

/**
 * Toggle mobile navbar & overlay
 */
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Open/close menu and overlay
[navOpenBtn, navCloseBtn, overlay].forEach(elem =>
  elem.addEventListener("click", toggleNavbar)
);

// Close menu when any nav link is clicked (on mobile)
navLinks.forEach(link =>
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  })
);

/**
 * Sticky header and scroll-to-top button
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY >= 200;

  header.classList.toggle("active", scrolled);
  goTopBtn.classList.toggle("active", scrolled);
});
