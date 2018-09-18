export const propsValidator = fn => _ => ({
  ..._,
  propsValidator: state => fn(state)
});
