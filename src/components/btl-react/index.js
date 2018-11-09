import react from "../../renderers/react";
import { create } from "../../beeetle";
import "../btl-text";

create({
  name: "btl-react",
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
        h("btl-text", {
          ref: r => {
            r.text = "React Button";
          }
        })
      )
    )
  )
});
