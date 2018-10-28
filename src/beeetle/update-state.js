// i = Component Interface

import { when } from "ramda";

const render = when(i => i.read().render, i => i.read().render(i));

export const updateState = {
  updateState: i => state => {
    i.write({
      ...i.read(),
      state
    });
    render(i);
  }
};
