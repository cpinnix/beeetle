import create from "../../create";
import { hyper, name, props, shouldRender } from "../../utils";
import "../vs-dot";

create(
  name("vs-sierpinski-triangle"),
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
        <vs-dot
          props=${() => ({
            x: x - targetSize / 2,
            y: y - targetSize / 2,
            size: targetSize,
            children
          })}
        ></vs-dot>
      `;
    }

    ns /= 2;

    return wire()`
      <vs-sierpinski-triangle
        props=${() => ({ x, y: y - ns / 2, s: ns, children })}
      ></vs-sierpinski-triangle>
      <vs-sierpinski-triangle
        props=${() => ({ x: x - ns, y: y + ns / 2, s: ns, children })}
      ></vs-sierpinski-triangle>
      <vs-sierpinski-triangle
        props=${() => ({ x: x + ns, y: y + ns / 2, s: ns, children })}
      ></vs-sierpinski-triangle>
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
