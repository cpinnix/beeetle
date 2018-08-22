export const name = name => _ => ({
  ..._,
  name: () => name
});
