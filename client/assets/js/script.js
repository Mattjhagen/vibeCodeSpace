'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * hero banner parallax
 */

const heroBanner = document.querySelector("[data-hero-banner]");
const heroBannerBg = document.querySelector("[data-hero-banner-bg]");
const heroContent = document.querySelector("[data-hero-content]");

const parallax = function (event) {
  const x = (event.clientX / window.innerWidth * 10) - 5;
  const y = (event.clientY / window.innerHeight * 10) - 5;

  heroBanner.style.transform = `translate(${x}px, ${y}px)`;
  heroBannerBg.style.transform = `translate(${x}px, ${y}px)`;
  heroContent.style.transform = `translate(${x}px, ${y}px)`;
}

window.addEventListener("mousemove", parallax);
