export const i18nValidator = fn => _ => ({
  ..._,
  i18nValidator: component => fn(component)
});
