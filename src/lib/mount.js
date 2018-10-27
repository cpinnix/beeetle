import { when } from "ramda";

export const mount = {
  mount: component => {
    when(
      component => component.componentDidMount,
      component => {
        component.componentDidMount({
          updateState: fn => {
            component = component.updateState(component)(fn);
          }
        });
      }
    )(component);

    when(
      component => component.render,
      component => component.render(component)
    )(component);
  }
};
