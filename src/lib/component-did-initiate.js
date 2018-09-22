export const componentDidInitiate = fn => _ => ({
  ..._,
  componentDidInitiate: fn
});
