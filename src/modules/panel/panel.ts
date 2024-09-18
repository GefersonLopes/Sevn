import "./panel.css";

import RoundNavigation from "../rounds/rounds";

import Handlebars from "handlebars";

export default class Panel {
  static logo = "/src/assets/images/team_shield.png";
  static matches = [
    {
      teamA: { name: "Time A", score: 3, logo: this.logo, color: "red" },
      teamB: { name: "Time B", score: 0, logo: this.logo, color: "blue" },
    },
    {
      teamA: { name: "Time C", score: 1, logo: this.logo, color: "orange" },
      teamB: { name: "Time D", score: 2, logo: this.logo, color: "green" },
    },
    {
      teamA: { name: "Time E", score: 4, logo: this.logo, color: "cyan" },
      teamB: { name: "Time F", score: 3, logo: this.logo, color: "light-blue" },
    },
    {
      teamA: { name: "Time G", score: 1, logo: this.logo, color: "purple" },
      teamB: { name: "Time H", score: 0, logo: this.logo, color: "purple" },
    },
  ];

  static async render() {
    const templateSource = await fetch("/src/modules/panel/panel.hbs").then((res) =>
      res.text()
    );
    const template = Handlebars.compile(templateSource);
    const compiledHTML = template({ matches: this.matches });

    const app = document.getElementById("app");

    app?.insertAdjacentHTML("beforeend", compiledHTML);

    RoundNavigation.render();
  }
}
