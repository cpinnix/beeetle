import create from "../../create";
import { hyper, name, state } from "../../utils";
import classes from "./index.css";

create(
  name("vs-text"),
  state({
    props: {
      text: "Put some text here."
    }
  }),
  hyper(
    (wire, { props: { text } }) => wire()`
      <span class=${classes.text}>${text}</span>
    `
  )
);
