export const animateNavbar = () => {
  const navbar = document.querySelector("header");

  if (!navbar) return;

  let isScrolling: number;

  window.addEventListener("scroll", () => {
    navbar.classList.add("opacity-0");

    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
      navbar.classList.remove("opacity-0");
    }, 150);
  });
};
