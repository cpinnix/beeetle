import { mergeAll } from "ramda";
import { create, mount } from "../lib";

const component = (...plugins) => {
  create(mergeAll([...plugins, mount]));
};

export default component;
