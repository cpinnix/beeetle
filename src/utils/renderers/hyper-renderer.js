import { bind, wire } from "hyperhtml";

export const hyper = fn => _ => ({
  ..._,
  render: base => state => bind(state.element)`${fn(wire, state)}`
});
