import overlaps from "../box/overlaps";
import contains from "../box/contains";

const queryRange = (tree, box, result = []) => {
  //if query area doesn't overlap this box then return
  if (!overlaps(tree.box, box)) {
    return result;
  }
  //if leaf node with contained value(s), then check against contained objects
  let i;
  if (tree.value.length > 0) {
    for (i = 0; i < tree.value.length; i++) {
      if (contains(box.low, box.high, tree.value[i].point)) {
        result.push(tree.value[i]);
      }
    }
    return result;
  }
  //if has children, then make recursive call on children
  if (tree.children !== null) {
    for (i = 0; i < tree.children.length; i++) {
      result = queryRange(tree.children[i], box, result);
    }
    return result;
  }

  return result;
};

export default queryRange;
