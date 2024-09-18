import Calls from "../../shared/utils/calls";
import common from "../../shared/utils/common";

import "./paragraph.css";

export default class Paragraph {
  static render() {
    Calls.generateHandlebars({
      context: common,
      templateSourcePath: "paragraph",
      tagName: "section",
    });
  }
}
