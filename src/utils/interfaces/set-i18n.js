export const setI18n = _ => ({
  ..._,
  setI18n: base => state => fn => {
    const { update, didUpdateI18n } = base;

    const newState = {
      ...state,
      i18n: fn(state.i18n)
    };

    update(base)(newState);

    if (didUpdateI18n) didUpdateI18n(newState);

    return newState;
  }
});
