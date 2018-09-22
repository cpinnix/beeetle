import create from "../create";
import { hyper } from "../hyper";
import { name, render } from "../utils";
import "../components/vs-clock";

create(
  name("vs-route-clock"),
  render(hyper(wire => wire()`<vs-clock></vs-clock>`))
);
