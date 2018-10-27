import component from "../component";
import hyper from "../../renderers/hyper";
import { render, name, state, componentDidMount } from "../../lib";
import classes from "./index.css";
import "../vs-text";

const getTime = () => Date.now();

component(
  name("vs-time"),
  state(getTime()),
  render(
    hyper(
      (wire, time) => wire()`
      <vs-text
        class=${classes.time}
        state=${time}
      >
      </vs-text>
    `
    )
  ),
  componentDidMount(({ updateState }) => {
    setInterval(() => updateState(getTime()), 1000);
  })
);
