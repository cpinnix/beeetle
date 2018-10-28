// i = Component Interface

import { pipe, when, is, ifElse } from "ramda";

const render = when(i => i.read().render, i => i.read().render(i));

const updateWith = ifElse(
  updater => is(Function, updater),
  updater => val => updater(val),
  updater => () => updater
);

export const updateState = {
  updateState: i => updater => {
    pipe(updateWith(updater), i.updateState, i.dispatch)(i.read().state);
    render(i);
  }
};
