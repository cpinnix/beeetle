import point from "./point";
import magnitude from "./magnitude";

const unitVector = (p, limit = 1) => {
  const m = magnitude(p) || 1;
  return point(p.x * limit / m, p.y * limit / m);
};

export default unitVector;
