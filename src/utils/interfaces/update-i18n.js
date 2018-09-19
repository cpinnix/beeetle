import { when } from "../when";

export const updateI18n = _ => ({
  ..._,
  updateI18n: base => state => fn => {
    const newState = {
      ...state,
      i18n: fn(state.i18n)
    };

    when(base.i18nValidator, () => base.i18nValidator(newState));

    base.render(base)(newState);

    when(base.didUpdateI18n, () => base.didUpdateI18n(newState));

    return newState;
  }
});
