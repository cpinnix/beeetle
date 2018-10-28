// i = Component Interface

import { when } from "ramda";

const render = when(i => i.read().render, i => i.read().render(i));

export const updateActions = {
  updateActions: i => actions => {
    i.write({
      ...i.read(),
      actions
    });
    render(i);
  }
};
