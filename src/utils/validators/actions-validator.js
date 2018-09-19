export const actionsValidator = fn => _ => ({
  ..._,
  actionsValidator: component => fn(component)
});
