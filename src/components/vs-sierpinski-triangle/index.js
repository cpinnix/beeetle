import component from "../component";
import { hyper } from "../../hyper";
import { render, name, state, componentShouldRender } from "../../utils";
import "../vs-dot";

component(
  name("vs-sierpinski-triangle"),
  state({
    props: {
      x: 0,
      y: 0,
      s: 16
    }
  }),
  render(
    hyper((wire, { props: { x, y, s, children } }) => {
      const targetSize = 25;

      let ns = s;

      if (s <= targetSize) {
        return wire()`
        <vs-dot
          state=${state => ({
            ...state,
            props: {
              x: x - targetSize / 2,
              y: y - targetSize / 2,
              size: targetSize,
              children
            }
          })}
        ></vs-dot>
      `;
      }

      ns /= 2;

      return wire()`
      <vs-sierpinski-triangle
        state=${state => ({
          ...state,
          props: { ...state.props, x, y: y - ns / 2, s: ns, children }
        })}
      ></vs-sierpinski-triangle>
      <vs-sierpinski-triangle
        state=${state => ({
          ...state,
          props: { ...state.props, x: x - ns, y: y + ns / 2, s: ns, children }
        })}
      ></vs-sierpinski-triangle>
      <vs-sierpinski-triangle
        state=${state => ({
          ...state,
          props: { ...state.props, x: x + ns, y: y + ns / 2, s: ns, children }
        })}
      ></vs-sierpinski-triangle>
    `;
    })
  ),
  componentShouldRender((prevState, nextState) => {
    const prevProps = prevState.props;
    const nextProps = nextState.props;
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
