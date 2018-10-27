import { bind, wire } from "hyperhtml";

const hyper = fn => (element, ...rest) => {
  bind(element)`${fn(wire, ...rest)}`;
};

export default hyper;
