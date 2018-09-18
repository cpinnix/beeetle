export const actionsTransformer = fn => _ => ({
  ..._,
  actionsTransformer: base => state => actions => fn(state)(actions)
});
