export const updateElement = _ => ({
  ..._,
  updateElement: () => state => ref => ({ ...state, element: ref })
});
