import { when } from "../when";

export const mount = _ => ({
  ..._,
  mount: base => state => {
    when(base.didMount, () => {
      base.didMount({
        updateProps: fn => {
          state = base.updateProps(base)(state)(fn);
        },
        updateActions: fn => {
          state = base.updateActions(base)(state)(fn);
        },
        updateAttributes: fn => {
          state = base.updateAttributes(base)(state)(fn);
        }
      });
    });

    base.render(base)(state);
  }
});
