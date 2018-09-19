export const updateAttrs = _ => ({
  ..._,
  updateAttrs: base => state => fn => {
    const newState = {
      ...state,
      attrs: fn(state.attrs)
    };

    base.render(base)(newState);

    return newState;
  }
});
