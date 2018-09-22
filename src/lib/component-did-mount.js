export const componentDidMount = fn => _ => ({
  ..._,
  componentDidMount: fn
});
