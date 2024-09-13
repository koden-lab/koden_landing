export const animateNavbar = () => {
  const navbar = document.querySelector("#main-navbar");
  const logo = document.querySelector("#koden-logo");

  if (!navbar || !logo) return;

  let isScrolling: number;

  window.addEventListener("scroll", () => {
    navbar.classList.remove("opacity-0");

    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
      if (window.scrollY !== 0) {
        navbar.classList.add("opacity-0");
      }
    }, 2500);
  });
};

export const handleFixedNav = () => {
  const navbar = document.querySelector("#main-navbar");
  const logo = document.querySelector("#koden-logo");
  if (!navbar || !logo) return;

  // Escuchar el evento de scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
      navbar.classList.remove("bg-deepGray");
      navbar.classList.add("bg-deepGray/50");
      navbar.classList.add("translate-x-[-3.25rem]");
      logo.classList.add("opacity-0");
    } else {
      navbar.classList.remove("bg-deepGray/50");
      navbar.classList.add("bg-deepGray");
      navbar.classList.remove("opacity-0");
      navbar.classList.remove("translate-x-[-3.25rem]");
      logo.classList.remove("opacity-0");
    }
  });
};
