export const updateName = _ => ({
  ..._,
  updateName: base => state => name => {
    const { didUpdateName } = base;

    const newState = {
      ...state,
      name: name()
    };

    if (didUpdateName) didUpdateName(newState);

    return newState;
  }
});
