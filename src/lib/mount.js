import { when } from "ramda";

export const mount = {
  mount: component => {
    when(
      component => component.componentDidMount,
      component => {
        component.componentDidMount({
          update: fn => {
            component = component.update(component)(fn);
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
