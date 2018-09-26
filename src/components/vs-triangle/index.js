import component from "../component";
import { render, name, state, componentDidMount } from "../../lib";
import "../vs-sierpinski-triangle";

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
  render((element, { props: { elapsed, seconds, newSeconds } }) => {
    let triangle = null;

    if (element.innerHTML === "") {
      triangle = document.createElement("vs-sierpinski-triangle");
      element.appendChild(triangle);
    } else {
      triangle = element.children[0];
    }

    const t = (elapsed / 1000) % 10;
    const scale = 1 + (t > 5 ? 10 - t : t) / 10;
    const transform =
      "scaleX(" + scale / 2.1 + ") scaleY(0.7) translateZ(0.1px)";

    Object.assign(triangle.style, {
      position: "absolute",
      left: "50%",
      transform
    });

    triangle.state = state => ({
      ...state,
      props: {
        ...state.props,
        x: 0,
        y: 0,
        s: 1000,
        children:
          newSeconds === seconds
            ? state.props.children
            : ({ element }) => (element.innerHTML = `<div>${seconds}</div>`)
      }
    });
  }),
  componentDidMount(({ update }) => {
    const tick = () => {
      update(state => {
        const elapsed = new Date().getTime() - state.props.start;
        const newSeconds = Math.floor(elapsed / 1000);
        return {
          ...state,
          props: {
            ...state.props,
            elapsed,
            seconds: state.props.newSeconds,
            newSeconds
          }
        };
      });
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  })
);
