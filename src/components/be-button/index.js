import hyper from "../../renderers/hyper";
import { create } from "../../../packages/ut-component";
import "../be-text";

create({
  name: "be-button",
  props: {
    click: () => console.log("hello"),
    label: "Label"
  },
  render: hyper(
    (wire, { click, label }) => wire()`
      <button onclick=${click}>
        <be-text text=${label} />
      </button>
    `
  )
});
