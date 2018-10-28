import component from "../component";
import hyper from "../../renderers/hyper";
import { render, name, actions } from "../../beeetle";
import "../vs-text";

component(
  name("vs-button"),
  actions({
    click: () => console.log("hello")
  }),
  render(
    hyper(
      (wire, _, { click }) => wire()`
      <button onclick=${click}>
        <vs-text state=${"Hyper Button"} />
      </button>
    `
    )
  )
);
