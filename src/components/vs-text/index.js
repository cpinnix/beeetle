import create from "../../create";
import { render, name, state } from "../../utils";
import classes from "./index.css";

create(
  name("vs-text"),
  state("Put some text here."),
  render((element, state) => {
    element.textContent = state;
    element.className = classes.text;
  })
);
