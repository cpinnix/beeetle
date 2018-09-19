import create from "../../create";
import { hyper, name, props } from "../../utils";

create(
  name("vs-list"),
  props({
    items: []
  }),
  hyper((wire, { props: { items } }) =>
    items.map(({ id }) => wire(id)`<div>${id}</div>`)
  )
);
