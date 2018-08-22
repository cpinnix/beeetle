export const getAttrs = _ => ({
  ..._,
  getAttrs: () => state => state.attrs
});
