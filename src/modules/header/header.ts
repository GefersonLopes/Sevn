import "./header.css";

import common from "../../shared/utils/common";
import Calls from "../../shared/utils/calls";

export default class Header {
  static companie = common.companie;
  static icon = common.icon;

  static async render() {
    // const app = document.querySelector("#app");
    const header = document.createElement("header");

    // const context = {
    //   companie: this.companie,
    //   icon: this.icon,
    // };

    // const templateSource = await fetch("/src/templates/header.hbs").then(
    //   (res) => res.text()
    // );

    // const template = Handlebars.compile(templateSource);

    // const compiledHTML = template(context);

    // header.innerHTML = compiledHTML;
    // app?.appendChild(header);
    Calls.generateHandlebars({
      context: common,
      templateSourcePath: "header",
    });
  }
}
