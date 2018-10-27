import { createElement } from "react";

const dotSize = 4;

export const point = ({ size, x, y, children }) =>
  createElement(
    "div",
    {
      style: {
        position: "absolute",
        background: "black",
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        left: `${x + (size - dotSize) / 2}px`,
        top: `${y + (size - dotSize) / 2}px`
      }
    },
    children
  );
