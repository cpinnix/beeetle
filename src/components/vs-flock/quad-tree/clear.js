const clear = tree => {
  tree.children = null;
  tree.value = [];
};

export default clear;
