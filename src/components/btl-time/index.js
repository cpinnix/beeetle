import hyper from "../../renderers/hyper";
import { create, useState, useEffect } from "../../beeetle";
import classes from "./index.css";
import "../btl-text";

const getTime = () => Date.now();

create({
  name: "btl-time",
  render: hyper(wire => {
    const [state, setState] = useState({ time: getTime() });

    useEffect(() => {
      const timeout = setTimeout(() => setState({ time: getTime() }), 1000);

      return () => clearTimeout(timeout);
    });

    return wire()`
        <btl-text
          class=${classes.time}
          text=${state.time}
        >
        </btl-text>
      `;
  })
});
