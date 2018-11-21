const queryPoint = (tree, point) => {
  //return value if point in tree
  if (!contains(tree.box.low, tree.box.high, point)) {
    return null;
  }

  if (tree.value.length > 0) {
    for (var i = 0; i < tree.value.length; i++) {
      if (equals(tree.value[i].point, point)) {
        return tree.value[i].value;
      }
    }
  }

  if (tree.children !== null) {
    let val = null;
    for (var i = 0; i < tree.children.length; i++) {
      val = val || queryPoint(tree.children[i], point);
    }
    return val;
  }
  return null;
};

export default queryPoint;
