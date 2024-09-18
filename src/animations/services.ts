export const setupServices = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const initialContentServices = urlParams.get("services");

  if (!initialContentServices) return;
  const element = document.querySelector(
    `[content-toggle=${initialContentServices}]`
  );

  element?.scrollIntoView({ block: "end", behavior: "instant" });
  if (urlParams.get("animate") === "true") {
    document.body.classList.add("animate__backInLeft");
    document.body.classList.add("animate__animated");
    const url = new URL(window.location.href);
    url.searchParams.delete("animate");
    window.history.replaceState(null, "", url.pathname + url.search);

    const headingHighlighted = document.querySelector(
      `[content-toggle=${initialContentServices}] h2`
    );

    console.log(headingHighlighted);
    if (!headingHighlighted) return;

    setTimeout(() => {
      headingHighlighted.classList.add("animate__headShake");
      headingHighlighted.classList.add("animate__animated");
    }, 1200);
  }
};
