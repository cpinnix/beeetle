import bSplit from "../box/split";
import quadTree from "./quad-tree";

const split = (tree, insertFn) => {
  // split into 4 congruent child quadrants using box quadrant method
  tree.nextLevel = tree.level + 1;
  tree.children = bSplit(tree.box.low, tree.box.high);

  tree.children = tree.children.map(child =>
    quadTree(child, tree.max, tree.max_level, tree.nextLevel)
  );

  // redistribute values to appropriate child nodes
  for (let i = 0; i < tree.value.length; i++) {
    for (let k = 0; k < tree.children.length; k++) {
      insertFn(tree.children[k], tree.value[i].point, tree.value[i].value);
    }
  }
};

export default split;
