import "./header.css";

import common from "../../shared/utils/common";
import Calls from "../../shared/utils/calls";

export default class Header {
  static async render() {
    Calls.generateHandlebars({
      context: common,
      templateSourcePath: "header",
    });
  }
}
