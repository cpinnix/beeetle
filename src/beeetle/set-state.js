import { when } from "ramda";

const render = when(
  element => element.read().render,
  element => element.read().render(element)
);

export const setState = {
  setState: element => state => {
    element.write({
      ...element.read(),
      state
    });
    render(element);
  }
};
