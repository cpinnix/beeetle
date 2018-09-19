export const html = fn => _ => ({
  ..._,
  renderer: component => (component.element.innerHTML = fn(component))
});
