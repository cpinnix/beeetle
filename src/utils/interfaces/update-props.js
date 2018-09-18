export const updateProps = _ => ({
  ..._,
  updateProps: base => state => fn => {
    const oldProps = state.props;

    const newState = {
      ...state,
      props: fn(state.props)
    };

    const newProps = newState.props;

    if (base.propsValidator) base.propsValidator(newState);

    if (base.hooks && base.hooks.shouldUpdate) {
      if (!base.hooks.shouldUpdate(oldProps, newProps)) return newState;
    }

    base.update(base)(newState);

    return newState;
  }
});
