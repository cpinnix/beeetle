import point from "./point";

const sub = (p, ...rest) => {
  let { x, y } = p;
  for (let i = 0; i < rest.length; i++) {
    x -= rest[i].x;
    y -= rest[i].y;
  }
  return point(x, y);
};

export default sub;
