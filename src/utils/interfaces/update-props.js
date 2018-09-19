import { when } from "../when";
import { either } from "../either";

export const updateProps = _ => ({
  ..._,
  updateProps: prevComponent => fn => {
    const prevProps = prevComponent.props;

    const nextComponent = {
      ...prevComponent,
      props: fn(prevComponent.props)
    };

    const nextProps = nextComponent.props;

    when(nextComponent.propsValidator, () =>
      nextComponent.propsValidator(nextComponent)
    );

    either(
      nextComponent.shouldRender &&
        !nextComponent.shouldRender(prevProps, nextProps),
      () => {},
      () => nextComponent.render(nextComponent)
    );

    return nextComponent;
  }
});
