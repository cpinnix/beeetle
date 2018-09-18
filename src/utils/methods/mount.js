export const mount = _ => ({
  ..._,
  mount: base => state => {
    if (base.hooks && base.hooks.mount) {
      base.hooks.mount({
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
    }
    base.update(base)(state);
  }
});
