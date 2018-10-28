import { createElement } from "react";
import ReactDOM from "react-dom";
import { triangle } from "../re-sierpinski-triangle";
import component from "../component";
import { render, name, state, componentDidMount } from "../../beeetle";

component(
  name("vs-triangle"),
  state({
    props: {
      start: new Date().getTime(),
      seconds: 0,
      newSeconds: 0,
      elapsed: 0
    }
  }),
  render((element, { props: { elapsed } }) => {
    const t = (elapsed / 1000) % 10;
    const scale = 1 + (t > 5 ? 10 - t : t) / 10;
    const transform = `scaleX(${scale / 2.1}) scaleY(0.7) translateZ(0.1px)`;

    Object.assign(element.style, {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform
    });

    ReactDOM.render(
      triangle({
        x: 0,
        y: 0,
        s: 1000,
        children: createElement("div")
      }),
      element
    );
  }),
  componentDidMount(({ getState, setState }) => {
    const tick = () => {
      const elapsed = new Date().getTime() - getState().props.start;
      const newSeconds = Math.floor(elapsed / 1000);
      setState({
        ...getState(),
        props: {
          ...getState().props,
          elapsed,
          seconds: getState().props.newSeconds,
          newSeconds
        }
      });
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  })
);
