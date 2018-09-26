import component from "../component";
import { react } from "../../renderers";
import { render, name, state } from "../../lib";

component(
  name("vs-react"),
  state({
    actions: {
      click: () => console.log("hello")
    }
  }),
  render(react(({ actions: { click } }) => h => h("div", null, `Hello World`)))
);
