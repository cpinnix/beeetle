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

    if (base.shouldRender) {
      if (!base.shouldRender(oldProps, newProps)) return newState;
    }

    base.render(base)(newState);

    return newState;
  }
});
