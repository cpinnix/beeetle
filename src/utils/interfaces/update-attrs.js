export const updateAttrs = _ => ({
  ..._,
  updateAttrs: prevComponent => fn => {
    const nextComponent = {
      ...prevComponent,
      attrs: fn(prevComponent.attrs)
    };

    nextComponent.render(nextComponent);

    return nextComponent;
  }
});
