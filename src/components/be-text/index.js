import { create } from "../../../packages/ut-component";
import classes from "./index.css";

create({
  name: "be-text",
  props: {
    text: "Put some text here."
  },
  render: (element, { text }) => {
    element.textContent = text;
    element.classList.add(classes.text);
  }
});
