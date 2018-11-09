/* global requestAnimationFrame, cancelAnimationFrame */

import { createElement } from "react";
import ReactDOM from "react-dom";
import { create, useState, useEffect } from "../../beeetle";
import { triangle } from "../re-sierpinski-triangle";

create({
  name: "btl-triangle",
  render: element => {
    const [state, setState] = useState({
      start: new Date().getTime(),
      seconds: 0,
      newSeconds: 0,
      elapsed: 0
    });

    useEffect(() => {
      const id = requestAnimationFrame(() => {
        const elapsed = new Date().getTime() - state.start;
        const newSeconds = Math.floor(elapsed / 1000);
        setState({
          ...state,
          elapsed,
          seconds: state.newSeconds,
          newSeconds
        });
      });

      return () => cancelAnimationFrame(id);
    });

    const t = (state.elapsed / 1000) % 10;
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
  }
});
