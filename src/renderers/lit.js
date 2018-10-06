import { html, render } from "lit-html";

const lit = fn => (element, state) => render(fn(html, state), element);

export default lit;
