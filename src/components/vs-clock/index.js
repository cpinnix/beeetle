import component from "../component";
import hyper from "../../renderers/hyper";
import { render, name, state } from "../../lib";
import "../vs-time";
import "../vs-text";

component(
  name("vs-clock"),
  state({
    i18n: {
      TEXT: "The current time is ",
      hello: "world"
    },
    attrs: {
      loaded: true
    }
  }),
  render(
    hyper(
      (wire, { i18n: { TEXT } }) => wire()`
      <div>
        <vs-text
          state=${TEXT}
        >
        </vs-text>
        <vs-time></vs-time>
      </div>
    `
    )
  )
);
