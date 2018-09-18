export const getName = _ => ({
  ..._,
  getName: () => state => state.name
});
