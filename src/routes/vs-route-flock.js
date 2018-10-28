import component from "./component";
import { html } from "../renderers";
import { name, render } from "../beeetle";
import "../components/vs-flock";

component(
  name("vs-route-flock"),
  render(
    html(`
      <vs-flock></vs-flock>
    `)
  )
);
