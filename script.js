"use strict";
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header__nav");
const headerNavHeight = headerNav.getBoundingClientRect().height;
const section1 = document.querySelector("#section--1");

///////////////////sticky navigation

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
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

///////REVEAL ON VIEW

// const allSections = document.querySelectorAll(".section");
// const revealSection = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("section--hidden");

//   sectionObserver.unobserve(entry.target);
// };
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.1,
// });
// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
});

// smooth scrolling

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }
  });
});
