import { when } from "ramda";

const didUnmount = when(
  i => i.read().componentDidUnmount,
  i => i.read().componentDidUnmount({ getState: i.read().getState(i) })
);

export const unmount = {
  unmount: didUnmount
};
