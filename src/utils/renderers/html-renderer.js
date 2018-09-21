export const html = fn => _ => ({
  ..._,
  renderer: (element, state) => (element.innerHTML = fn(state))
});
