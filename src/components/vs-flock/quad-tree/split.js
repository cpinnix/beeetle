import bSplit from "../box/split";
import Quadtree from "./quad-tree";

const split = (tree, insertFn) => {
  // split into 4 congruent child quadrants using box quadrant method
  tree.nextLevel = tree.level + 1;
  tree.children = bSplit(tree.box.low, tree.box.high);

  for (var i = 0; i < tree.children.length; i++) {
    tree.children[i] = new Quadtree(
      tree.children[i],
      tree.max,
      tree.max_level,
      tree.nextLevel
    );
  }

  // redistribute values to appropriate child nodes
  for (i = 0; i < tree.value.length; i++) {
    for (let k = 0; k < tree.children.length; k++) {
      insertFn(tree.children[k], tree.value[i].point, tree.value[i].value);
    }
  }
};

export default split;
