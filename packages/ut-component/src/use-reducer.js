import { unless } from "ramda";
import { getCurrentObjectId, getCurrentObject } from "./current";
import { commit } from "./commit";
import { STATES } from "./constants";

export const useReducer = (reducer, initialState) => {
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
        dispatch: action => {
          hook.state = reducer(hook.state, action);
          commit(element);
        }
      };

      return hook;
    }
  )(element.component[STATES][id]);

  const { state, dispatch } = element.component[STATES][id];

  return [state, dispatch];
};
