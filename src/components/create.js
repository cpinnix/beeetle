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
  update,
  mount,
  unmount
} from "../utils";

const create = (...plugins) =>
  pipe(
    ...plugins,
    setElement,
    getElement,
    setProps,
    getProps,
    setActions,
    getActions,
    setAttrs,
    getAttrs,
    update,
    mount,
    unmount,
    component
  )({});

export default create;
