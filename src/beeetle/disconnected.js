import { pipe, when } from "ramda";
import { EFFECTS } from "./constants";

export const disconnected = pipe(
  element => element.component,
  when(
    component => component[EFFECTS],
    component =>
      component[EFFECTS].forEach(when(hook => hook.clean, hook => hook.clean()))
  )
);
