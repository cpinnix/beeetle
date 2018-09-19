import create from "../create";
import { hyper, name, props, shouldRender } from "../../utils";
import "../ui-dot";

create(
  name("ui-sierpinski-triangle"),
  props({
    x: 0,
    y: 0,
    s: 16
  }),
  hyper((wire, { props: { x, y, s, children } }) => {
    const targetSize = 25;

    let ns = s;

    if (s <= targetSize) {
      return wire()`
        <ui-dot
          props=${() => ({
            x: x - targetSize / 2,
            y: y - targetSize / 2,
            size: targetSize,
            children
          })}
        ></ui-dot>
      `;
    }

    ns /= 2;

    return wire()`
      <ui-sierpinski-triangle
        props=${() => ({ x, y: y - ns / 2, s: ns, children })}
      ></ui-sierpinski-triangle>
      <ui-sierpinski-triangle
        props=${() => ({ x: x - ns, y: y + ns / 2, s: ns, children })}
      ></ui-sierpinski-triangle>
      <ui-sierpinski-triangle
        props=${() => ({ x: x + ns, y: y + ns / 2, s: ns, children })}
      ></ui-sierpinski-triangle>
    `;
  }),
  shouldRender((oldProps, newProps) => {
    const o = oldProps;
    const n = newProps;
    return !(
      o.x === n.x &&
      o.y === n.y &&
      o.s === n.s &&
      o.children === n.children
    );
  })
);
