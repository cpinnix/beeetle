import { createElement } from "react";
import { ifElse } from "ramda";
import { point } from "../re-point";

export const triangle = ({ x, y, s, children }) =>
  ifElse(
    ({ s, targetSize }) => s <= targetSize,
    ({ targetSize }) =>
      point({
        x: x - targetSize / 2,
        y: y - targetSize / 2,
        size: targetSize,
        children
      }),
    ({ ns }) => {
      ns /= 2;

      return createElement("div", null, [
        triangle({ x, y: y - ns / 2, s: ns, children }),
        triangle({
          x: x - ns,
          y: y + ns / 2,
          s: ns,
          children
        }),
        triangle({
          x: x + ns,
          y: y + ns / 2,
          s: ns,
          children
        })
      ]);
    }
  )({
    targetSize: 24,
    s,
    ns: s
  });
