import component from "./component";
import { html } from "../html";
import { name, render } from "../utils";
import "../components/vs-triangle";

component(
  name("vs-route-triangle"),
  render(html(`<vs-triangle></vs-triangle>`))
);
