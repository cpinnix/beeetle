import { when, ifElse } from "ramda";

const render = component => component.render(component);

export const update = {
  update: prevComponent => fn => {
    const prevState = prevComponent.state;

    const nextComponent = {
      ...prevComponent,
      state: fn(prevComponent.state)
    };

    const nextState = nextComponent.state;

    when(
      component => component.element,
      ifElse(
        component => component.componentShouldRender,
        when(
          component => component.componentShouldRender(prevState, nextState),
          render
        ),
        render
      )
    )(nextComponent);

    return nextComponent;
  }
};
