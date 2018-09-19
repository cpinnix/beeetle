import { when } from "../when";

export const unmount = _ => ({
  ..._,
  unmount: base => () =>
    when(base.hooks && base.hooks.unmount, () => base.hooks.unmount())
});
