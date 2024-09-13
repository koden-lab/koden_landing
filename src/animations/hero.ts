export const animateHero = () => {
  const hero = document.querySelector("main");

  if (!hero) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hero.classList.remove("opacity-0");
        } else {
          hero.classList.add("opacity-0");
        }
      });
    },
    { threshold: [0.4] }
  );

  observer.observe(hero);
};
