export const getActions = _ => ({
  ..._,
  getActions: () => state => state.actions
});
