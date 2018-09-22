import {
  component,
  pipe,
  update,
  mount,
  unmount,
  componentDidCreate
} from "./utils";

const didCreate = component =>
  console.log(["Created", component.name].join(" | "));

const create = (...plugins) =>
  pipe(
    ...plugins,
    mount,
    unmount,
    update,
    componentDidCreate(didCreate),
    component
  )({});

export default create;
