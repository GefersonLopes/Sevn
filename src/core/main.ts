import "../styles/reset.css";
import "../styles/global.css";

import Header from "../modules/header/header";
import Paragraph from "../modules/paragraph/paragraph";
import Panel from "../modules/panel/panel";

document.addEventListener("DOMContentLoaded", async () => {
  Header.render();

  Paragraph.render();

  Panel.render();
});
