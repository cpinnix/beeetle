export const actionsTransformer = fn => _ => ({
  ..._,
  actionsTransformer: base => state => fn(state)
});
