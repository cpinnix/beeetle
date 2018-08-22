import create from "../create";
import { raw, name, props, hooks } from "../../utils";

create(
  name("ui-provider"),
  hooks({
    mount({ setProps }) {
      setTimeout(
        () => setProps(props => ({ ...props, items: [{ id: 0 }, { id: 1 }] })),
        1000
      );
    }
  }),
  props({
    children: null,
    items: {}
  }),
  raw(state => {
    state.props.children && state.props.children(state);
  })
);
