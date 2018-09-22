import { component, pipe, update, mount, unmount } from "./utils";

const create = (...plugins) =>
  pipe(...plugins, mount, unmount, update, component)({});

export default create;
