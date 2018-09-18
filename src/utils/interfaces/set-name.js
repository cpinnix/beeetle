export const setName = _ => ({
  ..._,
  setName: base => (state, name) => {
    const { didUpdateName } = base;
    state.name = name();
    if (didUpdateName) didUpdateName(state);
  }
});
