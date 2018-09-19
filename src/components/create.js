import {
  component,
  pipe,
  updateElement,
  updateProps,
  updateActions,
  updateAttrs,
  updateI18n,
  updateName,
  actionsTransformer,
  didUpdateI18n,
  render,
  mount,
  unmount
} from "../utils";

const create = (...plugins) =>
  pipe(
    ...plugins,
    actionsTransformer(state => ({
      ...state,
      actions: Object.keys(state.actions).reduce(
        (a, v) => ({
          ...a,
          [v]: () => {
            console.log(["ACTION", state.name, v].join(" | "));
            return state.actions[v];
          }
        }),
        {}
      )
    })),
    didUpdateI18n(({ name, i18n }) =>
      console.log(["I18N", name, JSON.stringify(i18n)].join(" | "))
    ),
    updateElement,
    updateProps,
    updateActions,
    updateAttrs,
    updateI18n,
    updateName,
    render,
    mount,
    unmount,
    component
  )({});

export default create;
