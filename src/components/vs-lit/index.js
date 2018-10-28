import component from "../component";
import lit from "../../renderers/lit";
import { render, name, state } from "../../beeetle";
import "../vs-text";

component(
  name("vs-lit"),
  state("Lit Element"),
  render(lit((html, message) => html`<vs-text .state=${message}></vs-text>`))
);
