import { when } from "ramda";

const didMount = when(
  ({ read }) => read().componentDidMount,
  ({ read, write }) =>
    read().componentDidMount({
      updateState: fn => read().updateState({ read, write })(fn)
    })
);

const render = when(
  ({ read }) => read().render,
  ({ read }) => read().render({ read })
);

export const mount = {
  mount: componentInterface => {
    didMount(componentInterface);
    render(componentInterface);
  }
};
