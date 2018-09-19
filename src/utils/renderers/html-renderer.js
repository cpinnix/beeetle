export const html = fn => _ => ({
  ..._,
  renderer: base => state => (state.element.innerHTML = fn(state))
});
