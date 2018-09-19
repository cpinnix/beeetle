import { either } from "../either";

export const updateActions = _ => ({
  ..._,
  updateActions: prevComponent => fn => {
    let nextComponent = {
      ...prevComponent,
      actions: fn(prevComponent.actions)
    };

    nextComponent = either(
      nextComponent.actionsTransformer && nextComponent.actions,
      () => nextComponent.actionsTransformer(nextComponent),
      () => nextComponent
    );

    nextComponent.render(nextComponent);

    return nextComponent;
  }
});
