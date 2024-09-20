export const animateNavbar = () => {
  const navbar = document.querySelector("#main-navbar");

  if (!navbar) return;

  let isScrolling: number;
  let hideTimeout: number;

  const hideNavbar = () => {
    hideTimeout = setTimeout(() => {
      if (window.scrollY !== 0 && !navbar.matches(":hover")) {
        navbar.classList.add("opacity-0");
      }
    }, 2500);
  };

  window.addEventListener("scroll", () => {
    navbar.classList.remove("opacity-0");
    window.clearTimeout(isScrolling);
    window.clearTimeout(hideTimeout);
    isScrolling = setTimeout(() => {
      hideNavbar();
    }, 250);
  });

  navbar.addEventListener("mouseleave", () => {
    if (window.scrollY !== 0) {
      window.clearTimeout(hideTimeout);
      hideNavbar();
    }
  });

  navbar.addEventListener("mouseenter", () => {
    window.clearTimeout(hideTimeout);
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
      navbar.classList.add("bg-deepGray/50", "lg:translate-x-[-3.25rem]");

      logo.classList.add("opacity-0");

      logo.classList.add("-mt-32", "lg:mt-0");
    } else {
      navbar.classList.remove("bg-deepGray/50");
      navbar.classList.add("bg-deepGray");
      navbar.classList.remove("opacity-0", "lg:translate-x-[-3.25rem]");
      logo.classList.remove("-mt-32", "lg:mt-0");

      logo.classList.remove("opacity-0");
    }
  });
};
