import { html, render } from "lit-html";

const lit = fn => (element, ...rest) => render(fn(html, ...rest), element);

export default lit;
