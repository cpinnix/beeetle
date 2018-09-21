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
  hyper((wire, { actions: { click } }) => {
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
