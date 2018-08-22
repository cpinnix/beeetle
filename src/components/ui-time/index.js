import moment from "moment";
import create from "../create";
import { hyper, hooks, name, props } from "../../utils";
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
  hooks({
    mount({ setProps }) {
      setInterval(
        () =>
          setProps(props => ({
            ...props,
            time: getTime()
          })),
        1000
      );
    }
  })
);
