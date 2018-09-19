import { when } from "../when";

export const unmount = _ => ({
  ..._,
  unmount: component =>
    when(component.hooks && component.hooks.unmount, () =>
      component.hooks.unmount()
    )
});
