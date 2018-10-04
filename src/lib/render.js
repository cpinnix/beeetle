import { when } from "ramda";

export const render = fn => _ => ({
  ..._,
  render: when(
    component => component.element,
    component => fn(component.element, component.state)
  )
});
