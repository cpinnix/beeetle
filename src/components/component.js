import {
  create,
  pipe,
  update,
  mount,
  unmount,
  componentDidCreate
} from "../utils";

const didCreate = component =>
  console.log(["Created", component.name].join(" | "));

const component = (...plugins) =>
  pipe(
    ...plugins,
    mount,
    unmount,
    update,
    componentDidCreate(didCreate),
    create
  )({});

export default component;
