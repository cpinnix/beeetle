import component from "./component";
import hyper from "../renderers/hyper";
import { name, render } from "../beeetle";
import "../components/vs-clock";

component(
  name("vs-route-clock"),
  render(
    hyper(
      wire => wire()`
      <vs-clock></vs-clock>
    `
    )
  )
);
