import { bind, wire } from "hyperhtml";

export const hyper = fn => (element, state) =>
  bind(element)`${fn(wire, state)}`;
