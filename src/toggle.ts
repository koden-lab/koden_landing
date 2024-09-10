export const setupToggle = (idToggle: string, idToggleContainer: string) => {
  const toggleGroup = document.querySelector(`#${idToggle}`);
  const toggleContainer = document.querySelector(`#${idToggleContainer}`);

  if (!toggleGroup || !toggleContainer) return;

  const toggles = Array.from(toggleGroup.querySelectorAll("button"));
  const contents = Array.from(
    toggleContainer.querySelectorAll("[content-toggle]")
  );

  toggles.forEach((v) => {
    v.addEventListener("click", () => {
      toggles.forEach((t) => t.classList.remove("selected"));
      contents.forEach((c) => {
        c.classList.remove("flex");
        c.classList.add("hidden");
      });
      const actualContent = contents.find(
        (c) => c.getAttribute("content-toggle") === v.value
      );
      actualContent?.classList.remove("hidden");
      actualContent?.classList.add("flex");
      v.classList.add("selected");
    });
  });
};
