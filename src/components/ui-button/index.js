import create from "../create";
import { hyper, name, actions } from "../../utils";
import "../ui-text";

create(
  name("ui-button"),
  actions({
    click: () => console.log("hello")
  }),
  hyper(
    (wire, { actions: { click } }) => wire()`
      <button onclick=${click}>
        <ui-text props=${props => ({
          ...props,
          text: "Hello"
        })}
        >
        </ui-text>
      </button>
    `
  )
);
