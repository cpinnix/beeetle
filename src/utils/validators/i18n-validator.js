export const i18nValidator = fn => _ => ({
  ..._,
  i18nValidator: state => fn(state)
});
