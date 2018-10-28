import { when } from "ramda";

const render = when(
  element => element.read().render,
  element => element.read().render(element)
);

export const setActions = {
  setActions: element => actions => {
    element.write({
      ...element.read(),
      actions
    });
    render(element);
  }
};
