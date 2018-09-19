export const actionsTransformer = fn => _ => ({
  ..._,
  actionsTransformer: component => fn(component)
});
