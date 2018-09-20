export const stateTransformer = fn => _ => ({
  ..._,
  stateTransformer: component => fn(component)
});
