const mobileMenuButton = document.querySelector(".mobile-menu-button");
const navbarNav = document.querySelector(".navbar-nav");

mobileMenuButton.addEventListener("click", () => {
  navbarNav.classList.toggle("show");
});
