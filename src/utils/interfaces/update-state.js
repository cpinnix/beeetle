import { when } from "../when";

export const update = _ => ({
  ..._,
  update: prevComponent => fn => {
    const prevState = prevComponent.state;

    const nextComponent = {
      ...prevComponent,
      state: fn(prevComponent.state)
    };

    const nextState = nextComponent.state;

    when(nextComponent.stateValidator, () =>
      nextComponent.stateValidator(nextComponent)
    );

    when(
      nextComponent.element,
      when(
        !nextComponent.shouldRender ||
          (nextComponent.shouldRender &&
            !nextComponent.shouldRender(prevState, nextState)),
        () => {},
        () => nextComponent.render(nextComponent.element, nextComponent.state)
      )
    );

    return nextComponent;
  }
});
