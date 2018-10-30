import point from "../point/point";
import box from "./box";

const split = (low, high) => {
  const result = [];
  result.push(box(low, point((low.x + high.x) / 2, (low.y + high.y) / 2)));
  result.push(
    box(point((low.x + high.x) / 2, low.y), point(high.x, (low.y + high.y) / 2))
  );
  result.push(box(point((low.x + high.x) / 2, (low.y + high.y) / 2), high));
  result.push(
    box(point(low.x, (low.y + high.y) / 2), point((low.x + high.x) / 2, high.y))
  );
  return result;
};

export default split;
