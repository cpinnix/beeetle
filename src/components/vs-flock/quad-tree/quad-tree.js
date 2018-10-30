import equals from "../point/equals";
import contains from "../box/contains";
import bSplit from "../box/split";

const insert = (tree, point, object) => {
  //check if should contain point
  if (!contains(tree.box.low, tree.box.high, point)) {
    return tree;
  }

  //if is a leaf node and not full, then insert
  //need to check if it already exists though
  let i;
  if (
    tree.children === null &&
    (tree.value.length < tree.max || tree.level === tree.max_level)
  ) {
    for (i = 0; i < tree.value.length; i++) {
      if (equals(tree.value[i].point, point)) {
        tree.value[i].value = object;
        return;
      }
    }
    tree.value.push({ point, value: object });
    return tree;
  }

  //if is a leaf node but full, call split
  if (tree.children === null && tree.level < tree.max_level) {
    split(tree);
  }

  // if is not a leaf node, call insert on child nodes
  for (i = 0; i < tree.children.length; i++) {
    tree.children[i].insert(point, object);
  }
  tree.value = [];

  return tree;
};

const split = tree => {
  //split into 4 congruent child quadrants using box quadrant method
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

  //redistribute values to appropriate child nodes
  for (i = 0; i < tree.value.length; i++) {
    for (let k = 0; k < tree.children.length; k++) {
      tree.children[k].insert(tree.value[i].point, tree.value[i].value);
    }
  }
};

const clear = tree => {
  tree.children = null;
  tree.value = [];
};

export default class Quadtree {
  constructor(box, max, max_level, level) {
    this.box = box;
    this.children = null;
    this.value = [];
    this.max = max || 15; // maximum points allowed per node
    this.max_level = max_level || 10;
    this.level = level || 0;
  }

  insert(point, object) {
    return insert(this, point, object);
  }

  clear() {
    clear(this);
  }
}
