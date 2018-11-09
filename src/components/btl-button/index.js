import hyper from "../../renderers/hyper";
import { create } from "../../beeetle";
import "../btl-text";

create({
  name: "btl-button",
  props: {
    click: () => console.log("hello"),
    label: "Label"
  },
  render: hyper(
    (wire, { click, label }) => wire()`
      <button onclick=${click}>
        <btl-text text=${label} />
      </button>
    `
  )
});
