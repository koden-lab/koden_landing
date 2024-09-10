import { setupCollapsable } from "./collapsable";
import "./style.css";
import { setupToggle } from "./toggle";

setupToggle("toggle-services", "toggle-services-container");
setupCollapsable("trigger-stage-1", "container-stage-1", "indicator-stage-1");
setupCollapsable("trigger-stage-2", "container-stage-2", "indicator-stage-2");
setupCollapsable("trigger-stage-3", "container-stage-3", "indicator-stage-3");
