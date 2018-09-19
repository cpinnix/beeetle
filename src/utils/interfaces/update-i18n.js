import { when } from "../when";

export const updateI18n = _ => ({
  ..._,
  updateI18n: prevComponent => fn => {
    const nextComponent = {
      ...prevComponent,
      i18n: fn(prevComponent.i18n)
    };

    when(nextComponent.i18nValidator, () =>
      nextComponent.i18nValidator(nextComponent)
    );

    nextComponent.render(nextComponent);

    when(nextComponent.didUpdateI18n, () =>
      nextComponent.didUpdateI18n(nextComponent)
    );

    return nextComponent;
  }
});
