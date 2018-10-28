import component from "../component";
import hyper from "../../renderers/hyper";
import {
  render,
  name,
  state,
  componentDidMount,
  componentDidUnmount
} from "../../beeetle";
import classes from "./index.css";
import "../vs-text";

const getTime = () => Date.now();

const timer = fn => {
  let t;

  return {
    start: () => {
      t = setInterval(fn, 1000);
    },
    stop: () => clearInterval(t)
  };
};

component(
  name("vs-time"),
  state({ timer: null, time: getTime() }),
  render(
    hyper(
      (wire, { time }) => wire()`
      <vs-text
        class=${classes.time}
        state=${time}
      >
      </vs-text>
    `
    )
  ),
  componentDidMount(({ getState, setState }) => {
    const update = () => setState({ ...getState(), time: getTime() });

    const t = timer(update);

    setState({ ...getState(), timer: t });

    t.start();
  }),
  componentDidUnmount(({ getState }) => getState().timer.stop())
);
