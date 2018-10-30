const add = (p, ...rest) => {
  let { x, y } = p;
  for (let i = 0; i < rest.length; i++) {
    x += rest[i].x;
    y += rest[i].y;
  }
  return new Vector(x, y);
};

const sub = (p, ...rest) => {
  let { x, y } = p;
  for (let i = 0; i < rest.length; i++) {
    x -= rest[i].x;
    y -= rest[i].y;
  }
  return new Vector(x, y);
};

const distance = (a, b) =>
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

const multiplyScalar = (p, v) => {
  p.x *= v;
  p.y *= v;
  return p;
};

const magnitude = p => distance(p, { x: 0, y: 0 });

const unitVector = (p, limit = 1) => {
  const m = magnitude(p) || 1;
  return new Vector(p.x * limit / m, p.y * limit / m);
};

class Vector {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  add() {
    return add(this, ...arguments);
  }

  sub() {
    return sub(this, ...arguments);
  }

  distance(p) {
    return distance(this, p);
  }

  multiplyScalar(v) {
    return multiplyScalar(this, v);
  }

  magnitude() {
    return magnitude(this);
  }

  unitVector(limit = 1) {
    return unitVector(this, limit);
  }
}

Vector.prototype.origin = new Vector(0, 0);

export default Vector;
