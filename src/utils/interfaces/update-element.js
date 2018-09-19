export const updateElement = _ => ({
  ..._,
  updateElement: component => ref => ({ ...component, element: ref })
});
