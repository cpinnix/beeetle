export const setAttrs = _ => ({
  ..._,
  setAttrs: base => state => fn => {
    const newState = {
      ...state,
      attrs: fn(state.attrs)
    };

    base.update(base)(newState);

    return newState;
  }
});
