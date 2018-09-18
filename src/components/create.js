import {
  component,
  pipe,
  setElement,
  getElement,
  setProps,
  getProps,
  setActions,
  getActions,
  setAttrs,
  getAttrs,
  setI18n,
  getI18n,
  actionsTransformer,
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
    setElement,
    getElement,
    setProps,
    getProps,
    setActions,
    getActions,
    setAttrs,
    getAttrs,
    setI18n,
    getI18n,
    update,
    mount,
    unmount,
    component
  )({});

export default create;
