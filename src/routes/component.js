import { mergeAll } from "ramda";
import { create, mount } from "../beeetle";

const component = (...plugins) => {
  create(mergeAll([...plugins, mount]));
};

export default component;
