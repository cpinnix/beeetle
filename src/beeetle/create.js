/* global HTMLElement */

import { when } from "ramda";

export const create = component => {
  class Base extends HTMLElement {
    constructor() {
      super();

      this.component = {
        ...component
      };

      this.read = () => this.component;
      this.write = n => {
        this.component = n;
      };

      when(
        ({ read }) => read().updateState,
        ({ read, write }) => {
          Object.defineProperty(this, "state", {
            get: () => read().state,
            set: fn => read().updateState({ read, write })(fn)
          });
        }
      )(this);

      when(
        ({ read }) => read().updateActions,
        ({ read, write }) => {
          Object.defineProperty(this, "actions", {
            get: () => read().actions,
            set: fn => read().updateActions({ read, write })(fn)
          });
        }
      )(this);
    }

    connectedCallback() {
      this.component.element = this;

      when(
        ({ read }) => read().mount,
        ({ read, ...rest }) => read().mount({ read, ...rest })
      )(this);
    }

    disconnectedCallback() {
      when(
        ({ read }) => read().unmount,
        ({ read }) => read().unmount({ read })
      )(this);
    }
  }

  customElements.define(component.name, Base);

  when(
    component => component.componentDidCreate,
    component => component.componentDidCreate(component)
  )(component);
};
