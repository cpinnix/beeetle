import { when } from "./when";

export const mount = _ => ({
  ..._,
  mount: component => {
    when(component.componentDidMount, () => {
      component.componentDidMount({
        update: fn => {
          component = component.update(component)(fn);
        }
      });
    });
    component.render(component);
  }
});
