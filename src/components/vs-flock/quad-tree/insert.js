import contains from "../box/contains";
import equals from "../point/equals";
import split from "./split";

const updateTreeValueValueAt = (tree, i, object) => ({
  ...tree,
  value: [
    ...tree.value.slice(0, i),
    { ...tree.value[i], value: object },
    ...tree.value.slice(i + 1)
  ]
});

const insert = (tree, point, object) => {
  // check if should contain point
  if (!contains(tree.box.low, tree.box.high, point)) {
    return {
      ...tree
    };
  }

  // if is a leaf node and not full, then insert
  // need to check if it already exists though
  let i;
  if (
    tree.children === null &&
    (tree.value.length < tree.max || tree.level === tree.max_level)
  ) {
    for (i = 0; i < tree.value.length; i++) {
      if (equals(tree.value[i].point, point)) {
        return updateTreeValueValueAt(tree, i, object);
      }
    }

    tree.value.push({ point, value: object });
    return { ...tree };
  }

  //if is a leaf node but full, call split
  if (tree.children === null && tree.level < tree.max_level) {
    split(tree, insert);
  }

  // if is not a leaf node, call insert on child nodes
  for (i = 0; i < tree.children.length; i++) {
    insert(tree.children[i], point, object);
  }
  tree.value = [];

  return { ...tree };
};

export default insert;
