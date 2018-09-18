import {
  component,
  pipe,
  setElement,
  setProps,
  setActions,
  setAttrs,
  setI18n,
  setName,
  actionsTransformer,
  didUpdateI18n,
  update,
  mount,
  unmount
} from "../utils";

const create = (...plugins) =>
  pipe(
    ...plugins,
    actionsTransformer(state => actions => ({
      ...Object.keys(actions).reduce(
        (a, v) => ({
          ...a,
          [v]: () => {
            console.log(["ACTION", state.name, v].join(" | "));
            return actions[v];
          }
        }),
        {}
      )
    })),
    didUpdateI18n(({ name, i18n }) =>
      console.log(["I18N", name, JSON.stringify(i18n)].join(" | "))
    ),
    setElement,
    setProps,
    setActions,
    setAttrs,
    setI18n,
    setName,
    update,
    mount,
    unmount,
    component
  )({});

export default create;
