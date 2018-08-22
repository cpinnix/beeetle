export const mount = _ => ({
  ..._,
  mount: base => state => {
    if (base.hooks && base.hooks.mount) {
      base.hooks.mount({
        setProps: fn => base.setProps(base)(state, fn),
        setActions: fn => base.setActions(base)(state, fn),
        setAttributes: fn => base.setAttributes(base)(state, fn)
      });
    }
    base.update(base)(state);
  }
});
