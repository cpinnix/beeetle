import moment from "moment";
import create from "../../create";
import { hyper, name, props, didMount } from "../../utils";
import classes from "./index.css";
import "../vs-text";

const getTime = () => moment().format("LTS");

create(
  name("vs-time"),
  props({
    time: getTime()
  }),
  hyper(
    (wire, { props: { time } }) =>
      wire()`
      <vs-text
        class=${classes.time}
        props=${() => ({
          text: time
        })}
      >
      </vs-text>
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
