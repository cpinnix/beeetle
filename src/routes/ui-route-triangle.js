import create from "../components/create";
import { name, hyper } from "../utils";
import "../components/ui-triangle";

create(
  name("ui-route-triangle"),
  hyper(wire => wire()`<ui-triangle></ui-triangle>`)
);
