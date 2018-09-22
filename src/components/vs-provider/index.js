import component from "../component";
import { raw, name, state, componentDidMount } from "../../lib";

component(
  name("vs-provider"),
  componentDidMount(({ update }) => {
    setTimeout(
      () =>
        update(state => ({
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
  raw(state => {
    state.props.children && state.props.children(state);
  })
);
