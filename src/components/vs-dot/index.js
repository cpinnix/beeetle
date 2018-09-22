import create from "../../create";
import { hyper } from "../../hyper";
import { render, name, state } from "../../utils";

create(
  name("vs-dot"),
  state({ props: { size: 16, x: 0, y: 0, children: null } }),
  render(
    hyper((wire, { props: { size, x, y, children } }) => {
      const s = size * 1.3;

      const dotStyle = {
        position: "absolute",
        background: "#61dafb"
      };

      const style = {
        ...dotStyle,
        width: s + "px",
        height: s + "px",
        left: x + "px",
        top: y + "px",
        borderRadius: s / 2 + "px"
      };

      const el = wire()`
      <div style=${style}><div class="child"></div></div>
    `;

      if (children) children({ element: el.querySelector(".child") });

      return el;
    })
  )
);
