import moment from "moment";
import create from "../../create";
import { hyper, name, state, didMount } from "../../utils";
import classes from "./index.css";
import "../vs-text";

const getTime = () => moment().format("LTS");

create(
  name("vs-time"),
  state({
    props: {
      time: getTime()
    }
  }),
  hyper(
    (wire, { props: { time } }) =>
      wire()`
      <vs-text
        class=${classes.time}
        state=${state => ({
          ...state,
          props: {
            ...state.props,
            text: time
          }
        })}
      >
      </vs-text>
    `
  ),
  didMount(({ update }) => {
    setInterval(
      () =>
        update(state => ({
          ...state,
          props: {
            ...props,
            time: getTime()
          }
        })),
      1000
    );
  })
);
