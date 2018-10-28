import { when } from "ramda";

export const render = fn => ({
  render: when(
    ({ read }) => read().element,
    ({ read }) => fn(read().element, read().state, read().actions)
  )
});
