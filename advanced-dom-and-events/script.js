"use strict";

//Selections
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/////////////////////////////////////
//Smooth-Scrolling
btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

/////////////////////////////////////
//Page Navigationn

//without event delegation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
//Add Event listener to common parent element
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed component
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  //guard clause
  if (!clicked) return;

  //remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  //Activate tab
  clicked.classList.add("operations__tab--active");

  //activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//Menu Fade Animation
// nav.addEventListener("mouseover", function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav").querySelectorAll("nav__link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });
// nav.addEventListener("mouseout", function (e) {});

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

//STICKY NAVIGATION
//the scroll event
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

//Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsOptions, obsCallback);
// observer.observe(section1);

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`, //nav height
});
headerObserver.observe(header);

//Reveal Sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//Lazy Loading Images
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //replace img with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

//SLIDER
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

//Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);o343

// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);
document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

document.getElementsByClassName("btn");

//Creating and Inserting Elements
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class=btn btn--close-cookie>Got it!</button>";

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message); //these two will insert the element before/after as SIBLING elements
// header.after(message);

//Delete Elements
document
  .querySelector(".cookie-message")
  .addEventListener("click", function () {
    message.remove();
  });

//Smooth Scrolling
// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// //old school way
// btnScrollTo.addEventListener("click", function (e) {
//   // console.log("clicked");
//   // const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);

//   // console.log(e.target.getBoundingClientRect());

//   // console.log(`Current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

//   // console.log(
//   //   "height/width viewport",
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );

//   //scrolling

//   //old-school way
//   // winndow.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: "smooth",
//   // });

//   section1.scrollIntoView({ behavior: "smooth" });
// });

//Types  of Events and Event Handlers
//eventns are some type of signal generated by a certain DOM node
//happen whether were listening for them or not

// const h1 = document.querySelector("h1");

// const alertH1 = function (e) {
//   alert("addEventListener: Great! you are reading the heading");

//   // h1.removeEventListener("mouseenter", alertH1);
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert("addEventListener: Great! you are reading the heading");
//  //this is a bit more oldschool so know it for referencne
// };

//you can also do these on the actual HTML but because some people turn of JS in their browser, its not the best practice because then the page wont function naturally

//Event Propogation in Practice:  event bubbling
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);

//   //stop propogation
//   // e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("CONTAINER", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("NAV", e.target, e.currentTarget);
// });

// const h1 = document.querySelector("h1");

// //Going downwards: child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

// //going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// h1.closest("h1").style.background = "var(--gradient-primary)";

// //going sideways: selecting siblings (you can only access direct siblings, previous and the next one)
// connsole.log(h1.previousElementSibling);
// connsole.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transfrom = "scale(0.5)";
//   }
// });
