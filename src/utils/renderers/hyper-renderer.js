import { bind, wire } from "hyperhtml";

export const hyper = fn => _ => ({
  ..._,
  renderer: component => bind(component.element)`${fn(wire, component)}`
});
