const hamburgerBtn1 = document.querySelector(".stick1");
const hamburgerBtn2 = document.querySelector(".stick2");
const hamburgerBtn3 = document.querySelector(".stick3");
const hamburgerBtn = document.querySelector(".hamburger-menu");
const mainNavPhone = document.querySelector(".phone-main-nav");
const heroLabel = document.querySelector(".hero-label");

const navigationBurger = () => {
  mainNavPhone.classList.toggle("left");
  hamburgerBtn1.classList.toggle("rotate45");
  hamburgerBtn3.classList.toggle("rotate-45");
  hamburgerBtn2.classList.toggle("display-none");
  heroLabel.classList.toggle("display-none");
};

hamburgerBtn.addEventListener("click", navigationBurger);
