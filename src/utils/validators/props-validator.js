export const propsValidator = fn => _ => ({
  ..._,
  propsValidator: component => fn(component)
});
