export const didMount = fn => _ => ({
  ..._,
  didMount: fn
});
