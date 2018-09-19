import create from "../create";
import { name, hyper } from "../utils";
import "../components/vs-triangle";

create(
  name("vs-route-triangle"),
  hyper(wire => wire()`<vs-triangle></vs-triangle>`)
);
