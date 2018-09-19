import { when } from "../when";
import { either } from "../either";

export const updateProps = _ => ({
  ..._,
  updateProps: base => state => fn => {
    const oldProps = state.props;

    const newState = {
      ...state,
      props: fn(state.props)
    };

    const newProps = newState.props;

    when(base.propsValidator, () => base.propsValidator(newState));

    either(
      base.shouldRender && !base.shouldRender(oldProps, newProps),
      () => {},
      () => base.render(base)(newState)
    );

    return newState;
  }
});
