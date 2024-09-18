export const setupServicesDetailTransition = () => {
  const buttons = document.querySelectorAll("a.back-animate");
  const body = document.body;

  if (!buttons || !body) return;

  Array.from(buttons).forEach((b) =>
    b.addEventListener("click", (e) => {
      body.classList.add("animate__backOutRight");
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
