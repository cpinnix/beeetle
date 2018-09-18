export const setI18n = _ => ({
  ..._,
  setI18n: base => (state, fn) => {
    state.i18n = fn(state.actions);
    base.update(base)(state);
    if (base.hooks && base.hooks.didUpdateI18n) base.hooks.didUpdateI18n(state);
  }
});
