import Navigo from "navigo";

export const router = new Navigo();

export const mountFn = root => tag => () => {
  document.getElementById(root).innerHTML = `<${tag}></${tag}>`;
};

export const mount = mountFn("root");
