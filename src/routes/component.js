import { pipe, create, mount } from "../utils";

const component = (...plugins) => pipe(...plugins, mount, create)({});

export default component;
