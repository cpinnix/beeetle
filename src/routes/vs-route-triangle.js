import create from "../create";
import { hyper } from "../hyper";
import { name, render } from "../utils";
import "../components/vs-triangle";

create(
  name("vs-route-triangle"),
  render(hyper(wire => wire()`<vs-triangle></vs-triangle>`))
);
