export const scrollOpacity = (querySelector: string) => {
  const element = document.querySelector(querySelector);

  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.remove("opacity-0");
        } else {
          element.classList.add("opacity-0");
        }
      });
    },
    { threshold: [0.4] }
  );

  observer.observe(element);
};
