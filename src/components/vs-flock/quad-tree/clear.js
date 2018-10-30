const clear = tree => ({
  ...tree,
  children: null,
  value: []
});

export default clear;
