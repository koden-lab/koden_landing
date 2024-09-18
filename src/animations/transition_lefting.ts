export const setupServicesTransition = () => {
  const buttons = document.querySelectorAll("a.services-transition");
  const body = document.body;

  if (!buttons || !body) return;

  Array.from(buttons).forEach((b) =>
    b.addEventListener("click", (e) => {
      body.classList.add("animate__backOutLeft");
      body.classList.add("animate__animated");

      e.preventDefault();
      e.stopImmediatePropagation();

      body.addEventListener(
        "animationend",
        () => {
          window.location.href = (b as HTMLAnchorElement).href;
        },
        { once: true }
      );
    })
  );
};
