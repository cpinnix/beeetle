import create from "../components/create";
import { name, hyper } from "../utils";
import "../components/ui-button";
import "../components/vs-vue";

create(
  name("ui-route-home"),
  hyper(
    wire => wire()`
    <ui-button></ui-button>
    <vs-vue></vs-vue>
    `
  )
);
