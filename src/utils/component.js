/* global HTMLElement */

import { when } from "./when";

export const component = base => {
  console.log(base);

  class Base extends HTMLElement {
    constructor() {
      super();

      this.component = {
        ...base,
        name: base.name,
        state: base.defaultState
      };

      when(
        this.component.name && this.component.updateName,
        () =>
          (this.component = this.component.updateName(this.component)(
            () => this.component.name
          ))
      );

      when(this.component.updateState, () => {
        this.component = this.component.updateState(this.component)(
          () => this.component
        );

        Object.defineProperty(this, "state", {
          get: () => this.component,
          set: fn => {
            this.component = this.component.updateState(this.component)(fn);
          }
        });
      });
    }

    connectedCallback() {
      when(
        this.component.updateElement,
        () =>
          (this.component = this.component.updateElement(this.component)(this))
      );
      when(this.component.mount, () => this.component.mount(this.component));
    }

    disconnectedCallback() {
      this.component.unmount && this.component.unmount(this.component);
    }
  }

  customElements.define(base.name, Base);
};
