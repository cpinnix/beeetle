import create from "../../create";
import { raw, name, props, didMount } from "../../utils";

create(
  name("vs-provider"),
  didMount(({ updateProps }) => {
    setTimeout(
      () => updateProps(props => ({ ...props, items: [{ id: 0 }, { id: 1 }] })),
      1000
    );
  }),
  props({
    children: null,
    items: {}
  }),
  raw(state => {
    state.props.children && state.props.children(state);
  })
);
