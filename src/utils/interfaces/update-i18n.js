export const updateI18n = _ => ({
  ..._,
  updateI18n: base => state => fn => {
    const { render, didUpdateI18n } = base;

    const newState = {
      ...state,
      i18n: fn(state.i18n)
    };

    render(base)(newState);

    if (didUpdateI18n) didUpdateI18n(newState);

    return newState;
  }
});
