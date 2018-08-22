export const setProps = _ => ({
  ..._,
  setProps: base => (state, fn) => {
    const newProps = fn(state.props);
    if (base.propsValidator) base.propsValidator(newProps);
    const oldProps = state.props;
    state.props = newProps;

    if (base.hooks) {
      const { shouldUpdate } = base.hooks;
      if (shouldUpdate && !shouldUpdate(oldProps, newProps)) return;
    }

    base.update(base)(state);
  }
});
