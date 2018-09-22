import component from "../component";
import { hyper } from "../../renderers";
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
    hyper((wire, { actions: { click } }) => {
      return wire()`
      <button onclick=${click}>
        <vs-text state=${state => "Hello"}>
        </vs-text>
      </button>
    `;
    })
  )
);
