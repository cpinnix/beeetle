export const raw = fn => _ => ({
  ..._,
  renderer: (...args) => fn(...args)
});
