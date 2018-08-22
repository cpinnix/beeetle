export const unmount = _ => ({
  ..._,
  unmount: base => () => {
    if (base.hooks && base.hooks.unmount) {
      base.hooks.unmount();
    }
  }
});
