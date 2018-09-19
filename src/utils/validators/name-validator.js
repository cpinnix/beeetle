export const nameValidator = fn => _ => ({
  ..._,
  nameValidator: state => fn(state)
});
