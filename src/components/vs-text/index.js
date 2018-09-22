import component from "../component";
import { render, name, state } from "../../utils";
import classes from "./index.css";

component(
  name("vs-text"),
  state("Put some text here."),
  render((element, state) => {
    element.textContent = state;
    element.className = classes.text;
  })
);
