// BurgerMenu Script
let burgerButton = document.querySelector(".burger-menu-btn");
let navMenuList = document.querySelector(".nav-menu__list");

burgerButton.onclick = function showMenu() {
  burgerButton.classList.toggle("burger-menu-btn--close");
  navMenuList.classList.toggle("nav-menu__list--show");
};
// OrderButton Script

let orderButton = document.querySelector(".promo-card__btn");
let orderWindow = document.querySelector(".add-to-cart");
let overlay = document.querySelector(".overlay");
let body = document.querySelector(".page-body");
let orderCloseBtn = document.querySelector(".close-modal-btn");

if (orderButton) {
  orderButton.onclick = function showOrderWindow() {
    orderWindow.classList.add("modal--show");
    overlay.classList.add("overlay--show");
    body.classList.add("no-scroll");
  };
}

orderCloseBtn.onclick = function hideOrderWindow() {
  orderWindow.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
  body.classList.remove("no-scroll");
};

overlay.onclick = function hideOrderWindow() {
  orderWindow.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
  body.classList.remove("no-scroll");
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (orderWindow.classList.contains("modal--show")) {
      evt.preventDefault;
      orderWindow.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
      body.classList.remove("no-scroll");
    }
  }
});

// Review Slider

let slides = document.querySelectorAll(".review");
let arrowPrev = document.querySelector(".reviews-slider__previous-btn");
let arrowNext = document.querySelector(".reviews-slider__next-btn");
let n = 0;

if (arrowNext && arrowPrev) {
  arrowNext.addEventListener("click", () => slideToggle(1));
  arrowPrev.addEventListener("click", () => slideToggle(-1));
}

function slideToggle(index) {
  slides[Math.abs(n)].classList.remove("review--show");
  slides[Math.abs(n)].classList.add("review--hide");
  setTimeout(() => {
    slides[Math.abs(n)].classList.remove("review--hide");
    n += index;
    if (Math.abs(n) >= slides.length) {
      n = 0;
    }
    slides[Math.abs(n)].classList.add("review--show");
  }, 300);
}

// Product card

let productCards = document.querySelectorAll(".product-card");
if (productCards) {
  for (let i = 0; i < productCards.length; i++) {
    productCards[i].addEventListener("click", () => {
      orderWindow.classList.add("modal--show");
      overlay.classList.add("overlay--show");
      body.classList.add("no-scroll");
    });
  }
}
