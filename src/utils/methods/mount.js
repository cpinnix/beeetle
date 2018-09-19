import { when } from "../when";

export const mount = _ => ({
  ..._,
  mount: (component, cb) => {
    when(component.didMount, () => {
      component.didMount({
        updateProps: fn => {
          component = component.updateProps(component)(fn);
        },
        updateActions: fn => {
          component = component.updateActions(component)(fn);
        },
        updateAttributes: fn => {
          component = component.updateAttributes(component)(fn);
        }
      });
    });

    component.render(component);
  }
});
