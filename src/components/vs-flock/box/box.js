import contains from "./contains";
import overlaps from "./overlaps";
import point from "../point/point";

const split = (low, high) => {
  const result = [];
  result.push(new Box(low, point((low.x + high.x) / 2, (low.y + high.y) / 2)));
  result.push(
    new Box(
      point((low.x + high.x) / 2, low.y),
      point(high.x, (low.y + high.y) / 2)
    )
  );
  result.push(new Box(point((low.x + high.x) / 2, (low.y + high.y) / 2), high));
  result.push(
    new Box(
      point(low.x, (low.y + high.y) / 2),
      point((low.x + high.x) / 2, high.y)
    )
  );
  return result;
};

export default class Box {
  constructor(least, greatest) {
    this.low = least;
    this.high = greatest;
  }

  contains(p) {
    return contains(this.low, this.high, p);
  }

  overlaps(box) {
    return overlaps(this, box);
  }

  split() {
    return split(this.low, this.high);
  }
}
