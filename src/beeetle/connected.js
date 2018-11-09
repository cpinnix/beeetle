import { commit } from "./commit";

export const connected = element => {
  element.component.connected = true;
  commit(element);
};
