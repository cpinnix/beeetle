import component from "./component";
import { html } from "../renderers";
import { name, render } from "../beeetle";
import "../components/vs-lit";

component(
  name("vs-route-lit"),
  render(
    html(`
      <vs-lit></vs-lit>
    `)
  )
);
