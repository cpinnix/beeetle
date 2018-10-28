export const getState = {
  getState: element => () => element.read().state
};
