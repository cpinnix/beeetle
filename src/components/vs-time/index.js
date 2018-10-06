import component from "../component";
import hyper from "../../renderers/hyper";
import { render, name, state, componentDidMount } from "../../lib";
import classes from "./index.css";
import "../vs-text";

const getTime = () => Date.now();

component(
  name("vs-time"),
  state({
    props: {
      time: getTime()
    }
  }),
  render(
    hyper(
      (wire, { props: { time } }) => wire()`
      <vs-text
        class=${classes.time}
        state=${state => time}
      >
      </vs-text>
    `
    )
  ),
  componentDidMount(({ update }) => {
    setInterval(
      () =>
        update(state => ({
          ...state,
          props: {
            ...state.props,
            time: getTime()
          }
        })),
      1000
    );
  })
);
