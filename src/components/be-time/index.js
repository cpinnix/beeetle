import hyper from "../../renderers/hyper";
import { create, useState, useEffect } from "../../../packages/ut-component";
import classes from "./index.css";
import "../be-text";

const getTime = () => Date.now();

create({
  name: "be-time",
  render: hyper(wire => {
    const [state, setState] = useState({ time: getTime() });

    useEffect(() => {
      const timeout = setTimeout(() => setState({ time: getTime() }), 1000);

      return () => clearTimeout(timeout);
    });

    return wire(state)`
      <be-text
        class=${classes.time}
        text=${state.time}
      >
      </be-text>
    `;
  })
});
