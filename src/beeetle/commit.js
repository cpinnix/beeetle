import { when } from "ramda";
import { setCurrentObject, clear } from "./current";
import { EFFECTS } from "./constants";

export const commit = when(
  element => element.component.connected,
  element => {
    setCurrentObject(element);
    element.component.render(element, element.component.props);
    clear();

    when(
      component => component[EFFECTS],
      component => component[EFFECTS].forEach(({ effect }) => effect())
    )(element.component);
  }
);
