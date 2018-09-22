/* global HTMLElement */

import { when } from "./when";

export const create = component => {
  class Base extends HTMLElement {
    constructor() {
      super();

      this.component = {
        ...component
      };

      when(this.component.update, () => {
        Object.defineProperty(this, "state", {
          get: () => this.component.state,
          set: fn => {
            this.component = this.component.update(this.component)(fn);
          }
        });
      });
    }

    connectedCallback() {
      this.component.element = this;
      when(this.component.mount, () => this.component.mount(this.component));
    }

    disconnectedCallback() {
      this.component.unmount && this.component.unmount(this.component);
    }
  }

  customElements.define(component.name, Base);

  when(component.componentDidCreate, () =>
    component.componentDidCreate(component)
  );
};
