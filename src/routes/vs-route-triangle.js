import component from "./component";
import { html } from "../renderers";
import { name, render } from "../lib";
import "../components/vs-triangle";

component(
  name("vs-route-triangle"),
  render(html(`<vs-triangle></vs-triangle>`))
);
