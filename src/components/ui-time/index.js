import moment from "moment";
import create from "../create";
import { hyper, name, props, didMount } from "../../utils";
import classes from "./index.css";
import "../ui-text";

const getTime = () => moment().format("LTS");

create(
  name("ui-time"),
  props({
    time: getTime()
  }),
  hyper(
    (wire, { props: { time } }) =>
      wire()`
      <ui-text
        class=${classes.time}
        props=${() => ({
          text: time
        })}
      >
      </ui-text>
    `
  ),
  didMount(({ updateProps }) => {
    setInterval(
      () =>
        updateProps(props => ({
          ...props,
          time: getTime()
        })),
      1000
    );
  })
);
