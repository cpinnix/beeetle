import component from "../component";
import { render, name, state } from "../../beeetle";
import classes from "./index.css";

component(
  name("vs-text"),
  state("Put some text here."),
  render((element, text) => {
    element.textContent = text;
    element.classList.add(classes.text);
  })
);
