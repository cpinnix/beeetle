/* global HTMLElement */

import { when } from "ramda";

export const create = component => {
  class Base extends HTMLElement {
    constructor() {
      super();

      this.component = {
        ...component
      };

      when(
        component => component.updateState,
        () => {
          Object.defineProperty(this, "state", {
            get: () => this.component.state,
            set: fn => {
              this.component = this.component.updateState(this.component)(fn);
            }
          });
        }
      )(this.component);

      when(
        component => component.updateActions,
        () => {
          Object.defineProperty(this, "actions", {
            get: () => this.component.actions,
            set: fn => {
              this.component = this.component.updateActions(this.component)(fn);
            }
          });
        }
      )(this.component);
    }

    connectedCallback() {
      this.component.element = this;

      when(
        component => component.mount,
        component => component.mount(component)
      )(this.component);
    }

    disconnectedCallback() {
      this.component.unmount && this.component.unmount(this.component);
    }
  }

  customElements.define(component.name, Base);

  when(
    component => component.componentDidCreate,
    component => component.componentDidCreate(component)
  )(component);
};
