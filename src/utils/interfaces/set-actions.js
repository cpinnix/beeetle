export const setActions = _ => ({
  ..._,
  setActions: base => (state, fn) => {
    state.actions = fn(state.actions);
    base.update(base)(state);
  }
});
