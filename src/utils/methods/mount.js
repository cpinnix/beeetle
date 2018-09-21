import { when } from "../when";

export const mount = _ => ({
  ..._,
  mount: component => {
    when(component.didMount, () => {
      component.didMount({
        update: fn => {
          component = component.update(component)(fn);
        }
      });
    });

    console.log("mount", component);

    component.renderer(component.element, component.state);
  }
});
