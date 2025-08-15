import "./styles.css";
import { getMode } from "./modules/dom.js";
import { execModeComputer } from "./modules/computerMode.js";
import { execModeFriend } from "./modules/friendMode.js";

(async function main() {
  const selectedMode = await getMode();

  if (selectedMode === "optionComputer") {
    execModeComputer();
  } else {
    execModeFriend();
  }
})();
