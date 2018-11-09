import { createElement } from "react";
import { render } from "react-dom";

const react = fn => (element, ...rest) =>
  render(fn(createElement, ...rest), element);

export default react;
