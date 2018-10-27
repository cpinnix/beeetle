import { when } from "ramda";

export const render = fn => ({
  render: when(
    component => component.element,
    component => fn(component.element, component.state, component.actions)
  )
});
