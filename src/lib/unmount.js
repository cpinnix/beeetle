import { when } from "ramda";

export const unmount = _ => ({
  ..._,
  unmount: when(
    component => component.unmount,
    component => component.unmount()
  )
});
