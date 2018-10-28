import { pipe, when } from "ramda";

const read = i => i.read();

export const render = fn => ({
  render: pipe(
    read,
    when(
      component => component.element,
      component => fn(component.element, component.state, component.actions)
    )
  )
});
