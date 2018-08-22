import create from "../create";
import { raw, hooks, name, props } from "../../utils";
import "../ui-sierpinski-triangle";

create(
  name("ui-triangle"),
  props({
    start: new Date().getTime(),
    seconds: 0,
    newSeconds: 0,
    elapsed: 0
  }),
  raw(({ element, props: { elapsed, seconds, newSeconds } }) => {
    let triangle = null;

    if (element.innerHTML === "") {
      triangle = document.createElement("ui-sierpinski-triangle");
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

    triangle.props = props => ({
      ...props,
      x: 0,
      y: 0,
      s: 1000,
      children:
        newSeconds === seconds
          ? props.children
          : ({ element }) => (element.innerHTML = `<div>${seconds}</div>`)
    });
  }),
  hooks({
    mount: ({ setProps }) => {
      const tick = () => {
        setProps(props => {
          const elapsed = new Date().getTime() - props.start;
          const newSeconds = Math.floor(elapsed / 1000);
          return {
            ...props,
            elapsed,
            seconds: props.newSeconds,
            newSeconds
          };
        });
        requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }
  })
);
