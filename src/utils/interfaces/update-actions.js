export const updateActions = _ => ({
  ..._,
  updateActions: base => state => fn => {
    let newState = {
      ...state,
      actions: fn(state.actions)
    };

    if (base.actionsTransformer && state.actions) {
      newState = base.actionsTransformer(base)(state);
    }

    base.render(base)(state);

    return newState;
  }
});
