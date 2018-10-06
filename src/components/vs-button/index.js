import component from "../component";
import hyper from "../../renderers/hyper";
import { render, name, state } from "../../lib";
import "../vs-text";

component(
  name("vs-button"),
  state({
    actions: {
      click: () => console.log("hello")
    }
  }),
  render(
    hyper(
      (wire, { actions: { click } }) => wire()`
      <button onclick=${click}>
        <vs-text state=${() => "Hello"}>
        </vs-text>
      </button>
    `
    )
  )
);
