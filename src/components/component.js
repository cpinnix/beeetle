import { mergeAll } from "ramda";
import { create, update, mount, unmount, componentDidCreate } from "../lib";

const didCreate = component =>
  console.log(["Created", component.name].join(" | "));

const component = (...plugins) => {
  create(
    mergeAll([
      ...plugins,
      mount,
      unmount,
      update,
      componentDidCreate(didCreate)
    ])
  );
};

export default component;
