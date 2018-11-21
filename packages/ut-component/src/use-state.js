import { unless } from "ramda";
import { getCurrentObjectId, getCurrentObject } from "./current";
import { commit } from "./commit";
import { STATES } from "./constants";

export const useState = initialState => {
  const id = getCurrentObjectId();
  const element = getCurrentObject();

  element.component = unless(
    component => component[STATES],
    component => ({ ...component, [STATES]: [] })
  )(element.component);

  element.component[STATES][id] = unless(
    hook => hook,
    () => {
      const hook = {
        state: initialState,
        updater: newState => {
          hook.state = newState;
          commit(element);
        }
      };

      return hook;
    }
  )(element.component[STATES][id]);

  const { state, updater } = element.component[STATES][id];

  return [state, updater];
};
