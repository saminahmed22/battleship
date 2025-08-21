import "./styles.css";
import { getMode } from "./modules/dom.js";
import { execGame } from "./modules/execGame.js";

(async function main() {
  const selectedMode = await getMode();

  execGame(selectedMode);
})();
