import { component, pipe, update, render, mount, unmount } from "./utils";

const create = (...plugins) =>
  pipe(...plugins, mount, unmount, update, render, component)({});

export default create;
