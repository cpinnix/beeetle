import { either } from "../either";

export const updateActions = _ => ({
  ..._,
  updateActions: base => state => fn => {
    let newState = {
      ...state,
      actions: fn(state.actions)
    };

    newState = either(
      base.actionsTransformer && state.actions,
      () => base.actionsTransformer(base)(newState),
      () => newState
    );

    base.render(base)(newState);

    return newState;
  }
});
