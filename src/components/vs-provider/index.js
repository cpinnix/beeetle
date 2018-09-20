import create from "../../create";
import { raw, name, state, didMount } from "../../utils";

create(
  name("vs-provider"),
  didMount(({ updateState }) => {
    setTimeout(
      () =>
        updateState(state => ({
          ...state,
          props: { ...state.props, items: [{ id: 0 }, { id: 1 }] }
        })),
      1000
    );
  }),
  state({
    props: {
      children: null,
      items: {}
    }
  }),
  raw(({ state }) => {
    state.props.children && state.props.children(state);
  })
);
