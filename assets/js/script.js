// arrow up function!
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// mobile responsiveness menu
const menu = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");

// menu show
menu.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// menu hide
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);