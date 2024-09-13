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
    content.classList.remove(active ? "visible" : "invisible");
    content.classList.remove(active ? "opacity-100" : "opacity-0");
    content.classList.remove(active ? "max-h-[100px]" : "max-h-0");
    content.classList.add(active ? "invisible" : "visible");
    content.classList.add(active ? "opacity-0" : "opacity-100");
    content.classList.add(active ? "max-h-0" : "max-h-[100px]");

    active = !active;

    if (!indicator) return;

    indicator.innerHTML = active ? "-" : "+";
  });
};
