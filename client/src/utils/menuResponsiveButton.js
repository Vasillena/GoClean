export function menuResponsiveButton() {
  setTimeout(() => {
    const menuButton = document.querySelector(".menu-button");
    const navigationContainer = document.getElementsByTagName("nav");
    const navLinks = document.querySelectorAll(".navbar-link");

    menuButton.addEventListener("click", () => {
      if (navigationContainer[0].style.top === "-100%") {
        navigationContainer[0].style.top = "2em";
      } else {
        navigationContainer[0].style.top = "-100%";
      }

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navigationContainer[0].style.top = "-100%";
        });
      });
    });
  }, 1000);
}
