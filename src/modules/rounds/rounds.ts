import "./rounds.css";

import Main from "../../core/main";
import Panel from "../panel/panel";

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
    const currentRoundElement = document.querySelector(".current-round");
    const ul = document.querySelector("ul");

    if (this.currentRound === 1) {
      prevButton?.classList.add("disabled");
    } else {
      prevButton?.classList.remove("disabled");
    }

    if (this.currentRound === Main.matches.length) {
      nextButton?.classList.add("disabled");
    } else {
      nextButton?.classList.remove("disabled");
    }

    prevButton?.addEventListener("click", () => {
      if (this.currentRound > 1) {
        this.currentRound--;
        if (currentRoundElement !== null) {
          if (ul) ul.remove();
          Panel.render();
        }
        this.updateButtonsState(prevButton, nextButton);
      }
    });

    nextButton?.addEventListener("click", () => {
      if (this.currentRound < Main.matches.length) {
        this.currentRound++;
        if (currentRoundElement !== null) {
          if (ul) ul.remove();
          Panel.render();
        }
        this.updateButtonsState(prevButton, nextButton);
      }
    });
  }

  static updateButtonsState(
    prevButton: Element | null,
    nextButton: Element | null
  ) {
    if (this.currentRound === 1) {
      prevButton?.classList.add("disabled");
    } else {
      prevButton?.classList.remove("disabled");
    }

    if (this.currentRound === Main.matches.length) {
      nextButton?.classList.add("disabled");
    } else {
      nextButton?.classList.remove("disabled");
    }
  }
}
