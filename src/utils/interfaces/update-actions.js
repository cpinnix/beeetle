export const updateActions = _ => ({
  ..._,
  updateActions: base => state => fn => {
    let newState = {
      ...state,
      actions: fn(state.actions)
    };

    if (base.actionsTransformer && state.actions) {
      newState = {
        ...state,
        actions: base.actionsTransformer(base)(state)(state.actions)
      };
    }

    base.update(base)(state);

    return newState;
  }
});
