import { createElement } from "react";

export const point = ({ size, x, y, children }) =>
  createElement(
    "div",
    {
      style: {
        position: "absolute",
        background: "black",
        width: size + "px",
        height: size + "px",
        left: x + "px",
        top: y + "px",
        borderRadius: size / 2 + "px"
      }
    },
    children
  );
