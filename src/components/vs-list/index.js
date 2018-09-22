import component from "../component";
import { hyper, name, state } from "../../utils";

component(
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
