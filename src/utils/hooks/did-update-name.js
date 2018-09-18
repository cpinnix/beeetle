export const didUpdateName = fn => _ => ({
  ..._,
  didUpdateName: fn
});
