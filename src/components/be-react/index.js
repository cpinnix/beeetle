import react from "../../renderers/react";
import { create } from "../../../packages/ut-component";
import "../be-text";

create({
  name: "be-react",
  props: {
    click: () => console.log("hello")
  },
  render: react((h, { click }) =>
    h(
      "div",
      null,
      h(
        "button",
        {
          ref: r => {
            r.onclick = () => click();
          }
        },
        h("be-text", {
          ref: r => {
            r.text = "React Button";
          }
        })
      )
    )
  )
});
