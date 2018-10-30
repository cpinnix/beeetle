import equals from "./point/equals";
import contains from "./box/contains";
import bSplit from "./box/split";
import overlaps from "./box/overlaps";

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

const queryRangeRec = (tree, box, result) => {
  //if query area doesn't overlap this box then return
  if (!overlaps(tree.box, box)) {
    return;
  }
  //if leaf node with contained value(s), then check against contained objects
  let i;
  if (tree.value.length > 0) {
    for (i = 0; i < tree.value.length; i++) {
      if (contains(box.low, box.high, tree.value[i].point)) {
        result.push(tree.value[i]);
      }
    }
    return;
  }
  //if has children, then make recursive call on children
  if (tree.children !== null) {
    for (i = 0; i < tree.children.length; i++) {
      tree.children[i]._queryRangeRec(box, result);
    }
    return;
  }
};

const queryRange = (tree, box, result) => {
  return queryRangeRec(tree, box, result);
};

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
      val = val || tree.children[i].queryPoint(point);
    }
    return val;
  }
  return null;
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

  queryRange(box) {
    const result = [];
    queryRange(this, box, result);
    return result;
  }

  _queryRangeRec(box, result) {
    return queryRangeRec(this, box, result);
  }

  queryPoint(point) {
    return queryPoint(this, point);
  }

  clear() {
    clear(this);
  }
}
