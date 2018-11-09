const quadTree = (box, max = 15, max_level = 10, level = 0) => ({
  box,
  max,
  max_level,
  level,
  children: null,
  value: []
});

export default quadTree;
