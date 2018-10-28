import { when } from "ramda";

const didMount = when(
  ({ read }) => read().componentDidMount,
  ({ read, write }) =>
    read().componentDidMount({
      updateState: fn => write(read().updateState(read())(fn))
    })
);

const render = when(read => read().render, read => read().render(read()));

export const mount = {
  mount: (read, write) => {
    didMount({ read, write });
    render(read);
  }
};
