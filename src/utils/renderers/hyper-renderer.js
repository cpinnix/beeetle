import { bind, wire } from "hyperhtml";

export const hyper = fn => _ => ({
  ..._,
  renderer: base => state => bind(state.element)`${fn(wire, state)}`
});
