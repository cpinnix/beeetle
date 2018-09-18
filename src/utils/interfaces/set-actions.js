export const setActions = _ => ({
  ..._,
  setActions: base => (state, fn) => {
    state.actions = fn(state.actions);

    if (base.actionsTransformer && state.actions) {
      state.actions = base.actionsTransformer(base)(state)(state.actions);
    }

    base.update(base)(state);
  }
});
