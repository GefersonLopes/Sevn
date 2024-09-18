import "./rounds.css";

import Handlebars from "handlebars";

export default class RoundNavigation {
  static currentRound = 1;

  static async render() {
    const templateSource = await fetch("/src/modules/rounds/rounds.hbs").then(
      (res) => res.text()
    );
    const template = Handlebars.compile(templateSource);
    const compiledHTML = template({ currentRound: this.currentRound });

    const ul = document.querySelector("ul");

    ul?.insertAdjacentHTML("afterbegin", compiledHTML);

    this.addEventListeners();
  }

  static addEventListeners() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const currentRound = document.querySelector(".current-round");

    prevButton?.addEventListener("click", () => {
      if (this.currentRound > 1) {
        this.currentRound--;
        if (currentRound !== null) {
          currentRound.textContent = `RODADA ${this.currentRound}`;
        }
      }
    });

    nextButton?.addEventListener("click", () => {
      this.currentRound++;
      if (currentRound !== null) {
        currentRound.textContent = `RODADA ${this.currentRound}`;
      }
    });
  }
}
