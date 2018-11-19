import contains from "../box/contains";
import equals from "../point/equals";
import split from "./split";

const updateTreeValueValueAt = (tree, i, object) => {
  tree.value[i].value = object;
  return tree;
};

const insert = (tree, point, object) => {
  // check if should contain point
  if (!contains(tree.box.low, tree.box.high, point)) {
    return tree;
  }

  // if is a leaf node and not full, then insert
  // need to check if it already exists though
  let i;
  if (
    tree.children === null &&
    (tree.value.length < tree.max || tree.level === tree.max_level)
  ) {
    const index = tree.value.find(value => equals(value.point, point));

    if (index) {
      return updateTreeValueValueAt(tree, index, object);
    }

    tree.value.push({ point, value: object });
    return tree;
  }

  // if is a leaf node but full, call split
  if (tree.children === null && tree.level < tree.max_level) {
    split(tree, insert);
  }

  // if is not a leaf node, call insert on child nodes
  tree.children.forEach(child => insert(child, point, object));
  tree.value = [];

  return tree;
};

export default insert;
