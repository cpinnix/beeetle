import { when } from "ramda";

export const unmount = {
  unmount: when(
    component => component.unmount,
    component => component.unmount()
  )
};
