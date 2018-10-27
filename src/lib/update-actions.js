import { when, is, ifElse } from "ramda";

const render = component => component.render(component);

const updateComponentWith = component =>
  ifElse(v => is(Function, v), v => v(component.actions), v => v);

export const updateActions = {
  updateActions: prevComponent => updater => {
    const nextComponent = {
      ...prevComponent,
      actions: updateComponentWith(prevComponent)(updater)
    };

    when(component => component.element, render)(nextComponent);

    return nextComponent;
  }
};
