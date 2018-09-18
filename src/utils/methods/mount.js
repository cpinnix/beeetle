export const mount = _ => ({
  ..._,
  mount: base => state => {
    if (base.hooks && base.hooks.mount) {
      base.hooks.mount({
        setProps: fn => {
          state = base.setProps(base)(state)(fn);
        },
        setActions: fn => {
          state = base.setActions(base)(state)(fn);
        },
        setAttributes: fn => {
          state = base.setAttributes(base)(state)(fn);
        }
      });
    }
    base.update(base)(state);
  }
});
