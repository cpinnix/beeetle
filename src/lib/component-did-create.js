export const componentDidCreate = fn => _ => ({
  ..._,
  componentDidCreate: fn
});
