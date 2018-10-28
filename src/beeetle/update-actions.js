import { when, is, ifElse } from "ramda";

const render = ({ read }) => read().render({ read });

const updateActionsWith = actions =>
  ifElse(v => is(Function, v), v => v(actions), v => v);

export const updateActions = {
  updateActions: ({ read, write }) => updater => {
    write({ ...read(), actions: updateActionsWith(read().actions)(updater) });
    when(({ read }) => read().element, render)({ read });
  }
};
