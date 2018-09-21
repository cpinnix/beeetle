import { when } from "./when";

export const render = fn => _ => ({
  ..._,
  render: component =>
    when(component.element, () => {
      fn(component.element, component.state);
    })
});
