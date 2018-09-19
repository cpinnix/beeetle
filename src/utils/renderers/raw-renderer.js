export const raw = fn => _ => ({
  ..._,
  renderer: base => (...args) => fn(...args)
});
