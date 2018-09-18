import propTypes from "prop-types";
import create from "../create";
import { hyper, name, props, propsValidator } from "../../utils";
import classes from "./index.css";
import { checkPropTypes } from "prop-types";

const validator = propTypes => ({ props, name }) => {
  checkPropTypes(propTypes, props, "prop", name);
};

create(
  name("ui-text"),
  props({
    text: "Put some text here."
  }),
  propsValidator(
    validator({
      text: propTypes.string
    })
  ),
  hyper(
    (wire, { props: { text } }) => wire()`
      <span class=${classes.text}>${text}</span>
    `
  )
);
