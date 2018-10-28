import { when } from "ramda";

const didUnmount = when(
  element => element.read().componentDidUnmount,
  element =>
    element
      .read()
      .componentDidUnmount({ getState: element.read().getState(element) })
);

export const unmount = {
  unmount: didUnmount
};
