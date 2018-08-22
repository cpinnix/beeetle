export const getElement = _ => ({
  ..._,
  getElement: () => state => state.element
});
