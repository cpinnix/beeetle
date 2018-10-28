import { when, is, ifElse } from "ramda";

const render = ({ read }) => read().render({ read });

const updateStateWith = state =>
  ifElse(v => is(Function, v), v => v(state), v => v);

export const updateState = {
  updateState: ({ read, write }) => updater => {
    write({ ...read(), state: updateStateWith(read().state)(updater) });
    when(({ read }) => read().element, render)({ read });
  }
};
