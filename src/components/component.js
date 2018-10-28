import { mergeAll } from "ramda";
import {
  create,
  getState,
  setState,
  setActions,
  mount,
  unmount,
  componentDidCreate
} from "../beeetle";

const didCreate = component =>
  console.log(["Created", component.name].join(" "));

const component = (...plugins) => {
  create(
    mergeAll([
      ...plugins,
      mount,
      unmount,
      setState,
      getState,
      setActions,
      componentDidCreate(didCreate)
    ])
  );
};

export default component;
