import {
  component,
  pipe,
  setElement,
  getElement,
  setProps,
  getProps,
  setActions,
  setAttrs,
  getAttrs,
  setI18n,
  getI18n,
  setName,
  getName,
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
    getElement,
    setProps,
    getProps,
    setActions,
    setAttrs,
    getAttrs,
    setI18n,
    getI18n,
    setName,
    getName,
    update,
    mount,
    unmount,
    component
  )({});

export default create;
