import { when } from "../when";

export const updateName = _ => ({
  ..._,
  updateName: base => state => name => {
    const newState = {
      ...state,
      name: name()
    };

    when(base.didUpdateName, () => base.didUpdateName(newState));

    return newState;
  }
});
