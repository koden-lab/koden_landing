// export const animateNavbar = () => {
//   const navbar = document.querySelector("#main-navbar");
//   const logo = document.querySelector("#koden-logo");

//   if (!navbar || !logo) return;

//   let isScrolling: number;

//   window.addEventListener("scroll", () => {
//     navbar.classList.add("opacity-0");
//     logo.classList.add("opacity-0");

//     window.clearTimeout(isScrolling);

//     isScrolling = setTimeout(() => {
//       navbar.classList.remove("opacity-0");
//       logo.classList.remove("opacity-0");
//     }, 150);
//   });
// };

export const handleFixedNav = () => {
  const navbar = document.querySelector("#main-navbar");
  if (!navbar) return;

  let isScrolling: number;
  // Escuchar el evento de scroll
  window.addEventListener("scroll", () => {
    window.clearTimeout(isScrolling);
    if (window.scrollY !== 0) {
      isScrolling = setTimeout(() => {
        navbar.classList.remove("bg-deepGray");
        navbar.classList.add("bg-deepGray/50");
      }, 150);
    } else {
      navbar.classList.remove("bg-deepGray/50");
      navbar.classList.add("bg-deepGray");
    }
  });
};
