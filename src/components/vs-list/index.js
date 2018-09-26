import component from "../component";
import { hyper } from "../../renderers";
import { name, state, render } from "../../lib";

component(
  name("vs-list"),
  state({
    props: {
      items: []
    }
  }),
  render(
    hyper((wire, { props: { items } }) =>
      items.map(({ id }) => wire(id)`<div>${id}</div>`)
    )
  )
);
