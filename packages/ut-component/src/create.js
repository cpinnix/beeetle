/* global HTMLElement, customElements */

import { constructor } from "./constructor";
import { connected } from "./connected";
import { disconnected } from "./disconnected";

export const create = component => {
  class Base extends HTMLElement {
    constructor() {
      super();
      constructor(this, component);
    }

    connectedCallback() {
      connected(this);
    }

    disconnectedCallback() {
      disconnected(this);
    }
  }

  customElements.define(component.name, Base);
};
