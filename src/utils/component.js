/* global HTMLElement */

import { when } from "./when";

export const component = base => {
  class Base extends HTMLElement {
    constructor() {
      super();

      this.state = {
        name: base.name,
        props: base.defaultProps,
        attrs: base.defaultAttrs,
        i18n: base.defaultI18n,
        actions: base.defaultActions
      };

      when(
        this.state.name && base.updateName,
        () =>
          (this.state = base.updateName(base)(this.state)(
            () => this.state.name
          ))
      );

      when(base.updateProps, () => {
        this.state = base.updateProps(base)(this.state)(() => this.state.props);

        Object.defineProperty(this, "props", {
          get: () => this.state.props,
          set: fn => {
            this.state = base.updateProps(base)(this.state)(fn);
          }
        });
      });

      when(base.updateActions, () => {
        this.state = base.updateActions(base)(this.state)(
          () => this.state.actions
        );

        Object.defineProperty(this, "actions", {
          get: () => this.state.actions,
          set: fn => {
            this.state = base.updateActions(base)(this.state)(fn);
          }
        });
      });

      when(this.state.i18n && base.updateI18n, () => {
        this.state = base.updateI18n(base)(this.state)(() => this.state.i18n);

        Object.defineProperty(this, "i18n", {
          get: () => this.state.i18n,
          set: fn => {
            this.state = base.updateI18n(base)(this.state)(fn);
          }
        });
      });
    }

    connectedCallback() {
      when(
        base.updateElement,
        () => (this.state = base.updateElement(base)(this.state)(this))
      );
      when(base.mount, () => base.mount(base)(this.state));
    }

    disconnectedCallback() {
      base.unmount && base.unmount(base)(this.state);
    }
  }

  customElements.define(base.name, Base);
};
