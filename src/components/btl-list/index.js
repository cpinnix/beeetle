import hyper from "../../renderers/hyper";
import { create } from "../../beeetle";

create({
  name: "btl-list",
  props: {
    items: []
  },
  render: hyper((wire, { items }) =>
    items.map(({ id }) => wire(id)`<div>${id}</div>`)
  )
});
