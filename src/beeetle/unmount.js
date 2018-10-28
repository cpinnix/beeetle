import { when } from "ramda";

const didUnmount = when(
  ({ read }) => read().componentDidUnmount,
  ({ read }) => read().componentDidUnmount({ state: read().state })
);

export const unmount = {
  unmount: didUnmount
};
