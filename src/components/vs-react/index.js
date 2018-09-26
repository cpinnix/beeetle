import component from "../component";
import { react } from "../../renderers";
import { render, name, state } from "../../lib";
import "../vs-text";

component(
  name("vs-react"),
  state({
    actions: {
      click: () => console.log("hello")
    }
  }),
  render(
    react(({ actions: { click } }) => h =>
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
              r.state = () => "Hello";
            }
          })
        )
      )
    )
  )
);
