import component from "../component";
import react from "../../renderers/react";
import { render, name, actions } from "../../lib";
import "../vs-text";

component(
  name("vs-react"),
  actions({
    click: () => console.log("hello")
  }),
  render(
    react((_, { click }) => h =>
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
          h("vs-text", {
            ref: r => {
              r.state = "React Button";
            }
          })
        )
      )
    )
  )
);
