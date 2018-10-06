import { bind, wire } from "hyperhtml";

const hyper = fn => (element, state) => {
  bind(element)`${fn(wire, state)}`;
};

export default hyper;
