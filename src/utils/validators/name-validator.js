export const nameValidator = fn => _ => ({
  ..._,
  nameValidator: component => fn(component)
});
