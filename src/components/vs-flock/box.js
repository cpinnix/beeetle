import { point, lte, gte } from "./point";

export default class Box {
  constructor(least, greatest) {
    this.low = least;
    this.high = greatest;
  }

  contains(point) {
    if (lte(this.low, point) && gte(this.high, point)) {
      return true;
    }
    return false;
  }

  overlaps(box) {
    //if this contains either point of box, then there is an overlap
    if (
      this.contains(box.low) ||
      this.contains(box.high) ||
      box.contains(this.low) ||
      box.contains(this.high)
    ) {
      return true;
    }
    return false;
  }

  split() {
    const result = [];
    result.push(
      new Box(
        this.low,
        point((this.low.x + this.high.x) / 2, (this.low.y + this.high.y) / 2)
      )
    );
    result.push(
      new Box(
        point((this.low.x + this.high.x) / 2, this.low.y),
        point(this.high.x, (this.low.y + this.high.y) / 2)
      )
    );
    result.push(
      new Box(
        point((this.low.x + this.high.x) / 2, (this.low.y + this.high.y) / 2),
        this.high
      )
    );
    result.push(
      new Box(
        point(this.low.x, (this.low.y + this.high.y) / 2),
        point((this.low.x + this.high.x) / 2, this.high.y)
      )
    );
    return result;
  }
}
