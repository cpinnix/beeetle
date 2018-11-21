import contains from "./contains";

const overlaps = (a, b) =>
  contains(a.low, a.high, b.low) ||
  contains(a.low, a.high, b.high) ||
  contains(b.low, b.high, a.low) ||
  contains(b.low, b.high, a.high);

export default overlaps;
