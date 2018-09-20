export const stateValidator = fn => _ => ({
  ..._,
  stateValidator: component => fn(component)
});
