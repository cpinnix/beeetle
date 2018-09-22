import create from "../../create";
import { html } from "../../html";
import { render, name, state } from "../../utils";
import classes from "./index.css";

create(
  name("vs-text"),
  state({
    props: {
      text: "Put some text here."
    }
  }),
  render((element, { props: { text } }) => {
    element.textContent = text;
    element.className = classes.text;
  })
);
