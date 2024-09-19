export const setupAboutUsTransition = () => {
  const buttons = document.querySelectorAll("a.back-aboutus");
  const body = document.querySelector("main");

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
