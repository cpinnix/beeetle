export default class Quadtree {
  constructor(box, max, max_level, level) {
    this.box = box;
    this.children = null;
    this.value = [];
    this.max = max || 15; // maximum points allowed per node
    this.max_level = max_level || 10;
    this.level = level || 0;
  }
}
