import { bind, wire } from "hyperhtml";

export const hyper = fn => _ => ({
  ..._,
  renderer: (element, state) => bind(element)`${fn(wire, state)}`
});
