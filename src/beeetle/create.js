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
      console.log("connect");
      this.component.element = this;

      const componentReader = () => this.component;
      const componentWriter = newComponent => {
        this.component = newComponent;
      };

      when(
        componentReader => componentReader().mount,
        componentReader =>
          componentReader().mount(componentReader, componentWriter)
      )(componentReader);
    }

    disconnectedCallback() {
      console.log("disconnect");

      when(({ read }) => read().unmount, ({ read }) => read().unmount(read))(
        this
      );
    }
  }

  customElements.define(component.name, Base);

  when(
    component => component.componentDidCreate,
    component => component.componentDidCreate(component)
  )(component);
};
