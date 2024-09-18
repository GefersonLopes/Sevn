import "../styles/reset.css";
import "../styles/global.css";

import Header from "../modules/header/header";
import Paragraph from "../modules/paragraph/paragraph";
import Panel from "../modules/panel/panel";

import Api from "../shared/service/api";
import { Matches } from "../shared/interfaces";
import RoundNavigation from "../modules/rounds/rounds";

export default class Main {
  static matches: Matches = [];
  static async init() {
    this.matches = await Api.getMatches();
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await Main.init();

  Header.render();
  Paragraph.render();
  RoundNavigation.render();
  Panel.render();
});
