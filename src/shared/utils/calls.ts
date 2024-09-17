import Handlebars from "handlebars";

import { IHandlebars } from "../interfaces";

export default class Calls {
  static renderingsComponents() {}

  static async generateHandlebars({
    context,
    templateSourcePath,
  }: IHandlebars) {
    const fileName = templateSourcePath;
    const path = `/src/modules/${fileName}/${fileName}.hbs`;

    const templateSource = await fetch(path).then((res) => res.text());

    const template = Handlebars.compile(templateSource);

    const compiledHTML = template(context);

    const app = document.querySelector("#app");

    app?.insertAdjacentHTML("beforeend", compiledHTML);
  }
}
