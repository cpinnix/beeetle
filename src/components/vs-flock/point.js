const lte = (a, b) => {
  if (a.x <= b.x && a.y <= b.y) {
    return true;
  }
  return false;
};

const gte = (a, b) => {
  if (a.x >= b.x && a.y >= b.y) {
    return true;
  }
  return false;
};

const equals = (a, b) => a.x === b.x && a.y === b.y;

export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  lte(point) {
    return lte(this, point);
  }

  gte(point) {
    return gte(this, point);
  }

  equals(point) {
    return equals(this, point);
  }
}
