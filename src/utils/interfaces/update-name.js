import { when } from "../when";

export const updateName = _ => ({
  ..._,
  updateName: prevComponent => fn => {
    const nextComponent = {
      ...prevComponent,
      name: fn()
    };

    when(nextComponent.didUpdateName, () =>
      nextComponent.didUpdateName(nextComponent)
    );

    return nextComponent;
  }
});
