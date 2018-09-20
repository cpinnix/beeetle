import create from "../../create";
import { hyper, name, state } from "../../utils";
import "../vs-text";

create(
  name("vs-button"),
  state({
    actions: {
      click: () => console.log("hello")
    }
  }),
  hyper((wire, component) => {
    debugger;
    const {
      state: {
        actions: { click }
      }
    } = component;
    return wire()`
      <button onclick=${click}>
        <vs-text state=${state => ({
          ...state,
          props: {
            ...state.props,
            text: "Hello"
          }
        })}
        >
        </vs-text>
      </button>
    `;
  })
);
