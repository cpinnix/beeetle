export const setElement = _ => ({
  ..._,
  setElement: () => state => ref => ({ ...state, element: ref })
});
