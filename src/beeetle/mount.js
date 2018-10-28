import { when } from "ramda";

const didMount = when(
  i => i.read().componentDidMount,
  i =>
    i.read().componentDidMount({
      updateState: fn => i.read().updateState(i)(fn)
    })
);

const render = when(i => i.read().render, i => i.read().render(i));

export const mount = {
  mount: i => {
    didMount(i);
    render(i);
  }
};
