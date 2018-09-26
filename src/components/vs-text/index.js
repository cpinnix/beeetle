import component from "../component";
import { render, name, state } from "../../lib";
import classes from "./index.css";

component(
  name("vs-text"),
  state("Put some text here."),
  render((element, state) => {
    element.textContent = state;
    element.classList.add(classes.text);
  })
);
