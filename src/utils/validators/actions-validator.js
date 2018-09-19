export const actionsValidator = fn => _ => ({
  ..._,
  actionsValidator: state => fn(state)
});
