import { ifElse, unless } from "ramda";
import { getCurrentObjectId, getCurrentObject } from "./current";
import { EFFECTS } from "./constants";

export const useEffect = fn => {
  const id = getCurrentObjectId();
  const element = getCurrentObject();

  element.component = unless(
    component => component[EFFECTS],
    component => ({ ...component, [EFFECTS]: [] })
  )(element.component);

  element.component[EFFECTS][id] = ifElse(
    hook => hook,
    hook => {
      if (hook.clean) hook.clean();

      return {
        effect: () => {
          hook.clean = fn();
        }
      };
    },
    hook => {
      hook = {
        effect: () => {
          hook.clean = fn();
        }
      };

      return hook;
    }
  )(element.component[EFFECTS][id]);
};
