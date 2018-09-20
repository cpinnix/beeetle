import { when } from "../when";

export const mount = _ => ({
  ..._,
  mount: (component, cb) => {
    when(component.didMount, () => {
      component.didMount({
        updateState: fn => {
          component = component.updateState(component)(fn);
        }
      });
    });

    component.render(component);
  }
});
