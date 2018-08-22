export const setAttrs = _ => ({
  ..._,
  setAttrs: base => (state, fn) => {
    state.attrs = fn(state.attrs);
    base.update(base)(state);
  }
});
