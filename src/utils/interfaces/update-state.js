import { when } from "../when";
import { either } from "../either";

export const updateState = _ => ({
  ..._,
  updateState: prevComponent => fn => {
    const prevState = prevComponent.state;

    const nextComponent = {
      ...prevComponent,
      state: fn(prevComponent.state)
    };

    const nextState = nextComponent.state;

    when(nextComponent.stateValidator, () =>
      nextComponent.stateValidator(nextComponent)
    );

    either(
      nextComponent.shouldRender &&
        !nextComponent.shouldRender(prevState, nextState),
      () => {},
      () => nextComponent.render(nextComponent)
    );

    return nextComponent;
  }
});
