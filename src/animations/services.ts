export const setupServices = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const initialContentServices = urlParams.get("services");

  if (!initialContentServices) return;
  const element = document.querySelector(
    `[content-toggle=${initialContentServices}]`
  );

  element?.scrollIntoView({ block: "end", behavior: "instant" });
  if (urlParams.get("animate") === "true") {
    const headingHighlighted = document.querySelector(
      `[content-toggle=${initialContentServices}] h2`
    );

    if (!headingHighlighted) return;

    setTimeout(() => {
      headingHighlighted.classList.add("animate__headShake");
      headingHighlighted.classList.add("animate__animated");
    }, 1200);
  }
};
