const burger = document.querySelector(".c-burger");
const nav = document.querySelector(".l-nav__list");
const navLinks = document.querySelectorAll(".l-nav__item");

burger.addEventListener("click", () => {
  // Toggle Nav
  nav.classList.toggle("js-nav-active");

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade 0.4s ease forwards ${
        index / 7 + 0.4
      }s`;
    }
  });

  // Burger Animation
  burger.classList.toggle("js-toggle");
});
