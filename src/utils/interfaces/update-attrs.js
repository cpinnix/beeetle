export const updateAttrs = _ => ({
  ..._,
  updateAttrs: base => state => fn => {
    const newState = {
      ...state,
      attrs: fn(state.attrs)
    };

    base.update(base)(newState);

    return newState;
  }
});
