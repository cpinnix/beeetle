export const setName = _ => ({
  ..._,
  setName: base => state => name => {
    const { didUpdateName } = base;

    const newState = {
      ...state,
      name: name()
    };

    if (didUpdateName) didUpdateName(newState);

    return newState;
  }
});
