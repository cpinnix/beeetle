export const getProps = _ => ({
  ..._,
  getProps: () => state => state.props
});
