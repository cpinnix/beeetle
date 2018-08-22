export const html = fn => _ => ({
  ..._,
  render: base => state => (state.element.innerHTML = fn(state))
});
