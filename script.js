document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav__list");

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header__container")) {
      burger.classList.remove("active");
      nav.classList.remove("active");
    }
  });
});
