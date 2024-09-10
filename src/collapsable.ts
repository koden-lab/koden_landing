export const setupCollapsable = (
  idTrigger: string,
  idContent: string,
  idIndicator?: string
) => {
  const trigger = document.querySelector(`#${idTrigger}`);
  const content = document.querySelector(`#${idContent}`);
  const indicator = document.querySelector(`#${idIndicator}`);

  if (!trigger || !content) return;

  let active = false;

  trigger.addEventListener("click", () => {
    content.classList.remove(active ? "flex" : "hidden");
    content.classList.add(active ? "hidden" : "flex");

    active = !active;

    if (!indicator) return;

    indicator.innerHTML = active ? "-" : "+";
  });
};
