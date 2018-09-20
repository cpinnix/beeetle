import create from "../../create";
import { hyper, name, state, shouldRender } from "../../utils";
import "../vs-dot";

create(
  name("vs-sierpinski-triangle"),
  state({
    props: {
      x: 0,
      y: 0,
      s: 16
    }
  }),
  hyper((wire, { state: { props: { x, y, s, children } } }) => {
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
        props=${state => ({
          ...state,
          props: { ...state.props, x, y: y - ns / 2, s: ns, children }
        })}
      ></vs-sierpinski-triangle>
      <vs-sierpinski-triangle
        props=${state => ({
          ...state,
          props: { ...state.props, x: x - ns, y: y + ns / 2, s: ns, children }
        })}
      ></vs-sierpinski-triangle>
      <vs-sierpinski-triangle
        props=${state => ({
          ...state,
          props: { ...state.props, x: x + ns, y: y + ns / 2, s: ns, children }
        })}
      ></vs-sierpinski-triangle>
    `;
  }),
  shouldRender((prevComponent, nextComponent) => {
    const prevProps = prevComponent.state.props;
    const nextProps = nextComponent.state.props;
    const o = prevProps;
    const n = nextProps;
    return !(
      o.x === n.x &&
      o.y === n.y &&
      o.s === n.s &&
      o.children === n.children
    );
  })
);
