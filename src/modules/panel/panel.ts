import "./panel.css";

import RoundNavigation from "../rounds/rounds";
import Main from "../../core/main";

import { Game, Round } from "../../shared/interfaces";
import teamColors from "../../shared/utils/teamColors";

import Handlebars from "handlebars";

export default class Panel {
  static logo = "/src/assets/images/team_shield.png";

  static teamColors: { [key: string]: string } = teamColors;

  static async render() {
    const currentRound = RoundNavigation.currentRound;
    const templateSource = await fetch("/src/modules/panel/panel.hbs").then(
      (res) => res.text()
    );

    const matches = Main.matches
      .find((e: Round) => e.round === currentRound)
      ?.games.map((game: Game) => ({
        ...game,
        team_home_logo_class: this.teamColors[game.team_home_id],
        team_away_logo_class: this.teamColors[game.team_away_id],
      }));

    const template = Handlebars.compile(templateSource);
    const compiledHTML = template({ matches });

    const app = document.getElementById("app");

    app?.insertAdjacentHTML("beforeend", compiledHTML);

    RoundNavigation.render();
  }
}
