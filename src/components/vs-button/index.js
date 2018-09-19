import create from "../../create";
import { hyper, name, actions } from "../../utils";
import "../vs-text";

create(
  name("vs-button"),
  actions({
    click: () => console.log("hello")
  }),
  hyper(
    (wire, { actions: { click } }) => wire()`
      <button onclick=${click}>
        <vs-text props=${props => ({
          ...props,
          text: "Hello"
        })}
        >
        </vs-text>
      </button>
    `
  )
);
