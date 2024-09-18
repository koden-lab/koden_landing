import { setupCollapsable } from "./components/collapsable";
import "./style.css";
import { setupToggle } from "./components/toggle";
import { animateNavbar, handleFixedNav } from "./animations/navbar";
import { scrollOpacity } from "./animations/scroll_opacity";

const urlParams = new URLSearchParams(window.location.search);
const initialContentServices = urlParams.get("services");

setupToggle(
  "toggle-services",
  "toggle-services-container",
  initialContentServices
);
if (initialContentServices) {
  const element = document.querySelector(
    `[content-toggle=${initialContentServices}]`
  );

  element?.scrollIntoView({ block: "end" });
}
setupToggle("faq-triggers", "faq-container");
//Etapas
setupCollapsable("trigger-stage-1", "container-stage-1", "indicator-stage-1");
setupCollapsable("trigger-stage-2", "container-stage-2", "indicator-stage-2");
setupCollapsable("trigger-stage-3", "container-stage-3", "indicator-stage-3");
// ----FAQS
//Desarrollo
setupCollapsable("trigger-devs-1", "container-devs-1", "indicator-devs-1");
setupCollapsable("trigger-devs-2", "container-devs-2", "indicator-devs-2");
setupCollapsable("trigger-devs-3", "container-devs-3", "indicator-devs-3");
setupCollapsable("trigger-devs-4", "container-devs-4", "indicator-devs-4");
//Marketing
setupCollapsable(
  "trigger-marketing-1",
  "container-marketing-1",
  "indicator-marketing-1"
);
setupCollapsable(
  "trigger-marketing-2",
  "container-marketing-2",
  "indicator-marketing-2"
);
setupCollapsable(
  "trigger-marketing-3",
  "container-marketing-3",
  "indicator-marketing-3"
);
//Blockchain
setupCollapsable(
  "trigger-blockchain-1",
  "container-blockchain-1",
  "indicator-blockchain-1"
);
setupCollapsable(
  "trigger-blockchain-2",
  "container-blockchain-2",
  "indicator-blockchain-2"
);
setupCollapsable(
  "trigger-blockchain-3",
  "container-blockchain-3",
  "indicator-blockchain-3"
);
//erp y crm
setupCollapsable(
  "trigger-erpcrpm-1",
  "container-erpcrpm-1",
  "indicator-erpcrpm-1"
);
setupCollapsable(
  "trigger-erpcrpm-2",
  "container-erpcrpm-2",
  "indicator-erpcrpm-2"
);
setupCollapsable(
  "trigger-erpcrpm-3",
  "container-erpcrpm-3",
  "indicator-erpcrpm-3"
);

//ANIMATIONS

scrollOpacity("main");
scrollOpacity(".scroll-fade");
handleFixedNav();
animateNavbar();
