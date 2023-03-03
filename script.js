"use strict";
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header__nav");
const headerNavHeight = headerNav.getBoundingClientRect().height;
const section1 = document.querySelector("#section--1");

///////////////////sticky navigation

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.isIntersecting) headerNav.classList.add("sticky");
    else headerNav.classList.remove("sticky");
  });
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${headerNavHeight}px`,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(header);
