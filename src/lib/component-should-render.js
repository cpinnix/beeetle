export const componentShouldRender = fn => _ => ({
  ..._,
  componentShouldRender: fn
});
