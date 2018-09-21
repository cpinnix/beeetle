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
      if (nextComponent.shouldRender) {
        if (nextComponent.shouldRender(prevState, nextState)) {
          nextComponent.render(nextComponent.element, nextComponent.state);
        }
      } else {
        nextComponent.render(nextComponent.element, nextComponent.state);
      }
    });

    return nextComponent;
  }
});
