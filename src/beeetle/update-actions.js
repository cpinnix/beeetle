import { when } from "ramda";

const render = when(
  element => element.read().render,
  element => element.read().render(element)
);

export const updateActions = {
  updateActions: element => actions => {
    element.write({
      ...element.read(),
      actions
    });
    render(element);
  }
};
