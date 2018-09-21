import create from "../create";
import { hyper } from "../hyper";
import { name, render } from "../utils";
import "../components/vs-button";
import "../components/vs-vue";

create(
  name("vs-route-home"),
  render(
    hyper(
      wire => wire()`
        <vs-button></vs-button>
        <vs-vue></vs-vue>
      `
    )
  )
);
