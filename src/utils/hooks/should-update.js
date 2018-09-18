export const shouldRender = fn => _ => ({
  ..._,
  shouldRender: fn
});
