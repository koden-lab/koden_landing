export const setupAnimationBack = () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("animate") !== "true") return;
  console.log("animando");
  document.body.classList.add("animate__backInLeft");
  document.body.classList.add("animate__animated");
  const url = new URL(window.location.href);
  url.searchParams.delete("animate");
  window.history.replaceState(null, "", url.pathname + url.search);
};
