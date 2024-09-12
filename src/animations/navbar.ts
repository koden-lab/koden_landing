export const animateNavbar = () => {
  const navbar = document.querySelector("#main-navbar");

  if (!navbar) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.remove("opacity-0");
        } else {
          navbar.classList.add("opacity-0");
        }
      });
    },
    { threshold: [1] }
  );

  observer.observe(navbar);
};
