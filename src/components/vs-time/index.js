import moment from "moment";
import create from "../../create";
import { hyper } from "../../hyper";
import { render, name, state, componentDidMount } from "../../utils";
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
  render(
    hyper(
      (wire, { props: { time } }) => wire()`
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
