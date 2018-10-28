import { when } from "ramda";

const didUnmount = when(
  i => i.read().componentDidUnmount,
  i => i.read().componentDidUnmount({ state: i.read().state })
);

export const unmount = {
  unmount: didUnmount
};
