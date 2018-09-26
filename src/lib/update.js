import { when } from "./when";

export const update = _ => ({
  ..._,
  update: prevComponent => fn => {
    const prevState = prevComponent.state;

    const nextComponent = {
      ...prevComponent,
      state: fn(prevComponent.state)
    };

    const nextState = nextComponent.state;

    when(nextComponent.element, () => {
      if (nextComponent.componentShouldRender) {
        if (nextComponent.componentShouldRender(prevState, nextState)) {
          nextComponent.render(nextComponent);
        }
      } else {
        nextComponent.render(nextComponent);
      }
    });

    return nextComponent;
  }
});
