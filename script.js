const hamburgerBtn = document.querySelector(`.hamburger-menu`);
const mainNavPhone = document.querySelector(`.phone-main-nav`);
const heroLabel = document.querySelector(`.hero-label`);

const navigationBurger = () => {
  mainNavPhone.classList.toggle(`left`);
  hamburgerBtn.classList.toggle(`rotate90`);
  heroLabel.classList.toggle(`display-none`);
};

hamburgerBtn.addEventListener(`click`, navigationBurger);
