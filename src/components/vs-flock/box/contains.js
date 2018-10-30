import lte from "../point/lte";
import gte from "../point/gte";

const contains = (a, b, p) => lte(a, p) && gte(b, p);

export default contains;
