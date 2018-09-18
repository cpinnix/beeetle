export const setProps = _ => ({
  ..._,
  setProps: base => (state, fn) => {
    const oldProps = state.props;
    const newProps = fn(state.props);

    state.props = newProps;

    if (base.propsValidator) base.propsValidator(state);

    if (base.hooks) {
      const { shouldUpdate } = base.hooks;
      if (shouldUpdate && !shouldUpdate(oldProps, newProps)) return;
    }

    base.update(base)(state);
  }
});
