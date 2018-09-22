import component from "../component";
import { lit } from "../../lit";
import { render, name, state } from "../../utils";
import "../vs-text";

component(
  name("vs-lit"),
  state({
    props: {
      message: "Hello World"
    }
  }),
  render(
    lit(
      (html, { props: { message } }) =>
        html`<vs-text .state=${state => message}></vs-text>`
    )
  )
);
