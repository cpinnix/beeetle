import create from "../../create";
import { hyper, name, state } from "../../utils";

create(
  name("vs-list"),
  state({
    props: {
      items: []
    }
  }),
  hyper((wire, { props: { items } }) =>
    items.map(({ id }) => wire(id)`<div>${id}</div>`)
  )
);
