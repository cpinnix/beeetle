import { when, is, ifElse } from "ramda";

const render = component => component.render(component);

const updateComponentWith = component =>
  ifElse(v => is(Function, v), v => v(component.state), v => v);

export const updateState = {
  updateState: prevComponent => updater => {
    const nextComponent = {
      ...prevComponent,
      state: updateComponentWith(prevComponent)(updater)
    };

    when(component => component.element, render)(nextComponent);

    return nextComponent;
  }
};
