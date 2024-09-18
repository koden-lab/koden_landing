export const setupBackButtonsSlide = () => {
  const buttons = document.querySelectorAll("a.back-slide");

  if (!buttons) return;

  Array.from(buttons).forEach((b) =>
    b.addEventListener("click", (e) => {
      if (b.getAttribute("data-clicked") === "true") return;

      b.classList.add("animate__slideOutLeft");
      b.classList.add("animate__animated");
      b.classList.add("animate__fast");

      e.preventDefault();
      e.stopImmediatePropagation();

      b.setAttribute("data-clicked", "true");

      setTimeout(() => {
        (b as HTMLButtonElement).click();
      }, 800);
    })
  );
};
