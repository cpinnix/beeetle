export const raw = fn => _ => ({
  ..._,
  render: base => (...args) => fn(...args)
});
