import { create } from "../../beeetle";
import classes from "./index.css";

create({
  name: "btl-text",
  props: {
    text: "Put some text here."
  },
  render: (element, { text }) => {
    element.textContent = text;
    element.classList.add(classes.text);
  }
});
