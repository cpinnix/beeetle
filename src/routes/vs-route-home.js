import create from "../create";
import { name, hyper } from "../utils";
import "../components/vs-button";
import "../components/vs-vue";

create(
  name("vs-route-home"),
  hyper(
    wire => wire()`
    <vs-button></vs-button>
    <vs-vue></vs-vue>
    `
  )
);
