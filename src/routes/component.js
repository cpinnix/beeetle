import { pipe, create, mount } from "../lib";

const component = (...plugins) => pipe(...plugins, mount, create)({});

export default component;
