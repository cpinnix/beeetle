/* global HTMLElement */

import { when } from "./when";

export const component = base => {
  class Base extends HTMLElement {
    constructor() {
      super();

      this.component = {
        ...base,
        name: base.name,
        props: base.defaultProps,
        attrs: base.defaultAttrs,
        i18n: base.defaultI18n,
        actions: base.defaultActions
      };

      when(
        this.component.name && this.component.updateName,
        () =>
          (this.component = this.component.updateName(this.component)(
            () => this.component.name
          ))
      );

      when(this.component.updateProps, () => {
        this.component = this.component.updateProps(this.component)(
          () => this.component.props
        );

        Object.defineProperty(this, "props", {
          get: () => this.component.props,
          set: fn => {
            this.component = this.component.updateProps(this.component)(fn);
          }
        });
      });

      when(this.component.updateActions, () => {
        this.component = this.component.updateActions(this.component)(
          () => this.component.actions
        );

        Object.defineProperty(this, "actions", {
          get: () => this.component.actions,
          set: fn => {
            this.component = this.component.updateActions(this.component)(fn);
          }
        });
      });

      when(this.component.i18n && this.component.updateI18n, () => {
        this.component = this.component.updateI18n(this.component)(
          () => this.component.i18n
        );

        Object.defineProperty(this, "i18n", {
          get: () => this.component.i18n,
          set: fn => {
            this.component = this.component.updateI18n(this.component)(fn);
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
