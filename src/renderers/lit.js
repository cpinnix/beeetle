import { html, render } from "lit-html";

export const lit = fn => (element, state) => render(fn(html, state), element);
