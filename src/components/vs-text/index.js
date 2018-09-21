import propTypes from "prop-types";
import create from "../../create";
import { hyper, name, state, stateValidator } from "../../utils";
import classes from "./index.css";
import { checkPropTypes } from "prop-types";

const validator = propTypes => ({ state: { props, name } }) => {
  checkPropTypes(propTypes, props, "prop", name);
};

create(
  name("vs-text"),
  state({
    props: {
      text: "Put some text here."
    }
  }),
  // stateValidator(state =>
  //   validator({
  //     text: propTypes.bool,
  //   })
  // ),
  hyper(
    (wire, { props: { text } }) => wire()`
      <span class=${classes.text}>${text}</span>
    `
  )
);
