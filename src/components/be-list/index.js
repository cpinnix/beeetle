import hyper from "../../renderers/hyper";
import { create } from "../../../packages/ut-component";

create({
  name: "be-list",
  props: {
    items: []
  },
  render: hyper((wire, { items }) =>
    items.map(({ id }) => wire(id)`<div>${id}</div>`)
  )
});
