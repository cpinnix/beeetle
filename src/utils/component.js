/* global HTMLElement */

export const component = base => {
  class Base extends HTMLElement {
    constructor() {
      super();

      this.state = {
        name: base.name ? base.name() : null,
        props: base.props ? base.props() : null,
        attrs: base.attrs ? base.attrs() : null,
        i18n: base.i18n ? base.i18n() : null,
        actions: base.actions ? base.actions() : null
      };

      if (base.setProps) {
        base.setProps(base)(this.state, () => this.state.props);

        Object.defineProperty(this, "props", {
          get: () => base.getProps(base)(this.state),
          set: fn => base.setProps(base)(this.state, fn)
        });
      }

      if (base.setActions) {
        base.setActions(base)(this.state, () => this.state.actions);

        Object.defineProperty(this, "actions", {
          get: () => base.getActions(base)(this.state),
          set: fn => base.setActions(base)(this.state, fn)
        });
      }

      if (base.setI18n) {
        base.setI18n(base)(this.state, () => this.state.i18n);

        Object.defineProperty(this, "i18n", {
          get: () => base.getI18n(base)(this.state),
          set: fn => base.setI18n(base)(this.state, fn)
        });
      }
    }

    connectedCallback() {
      base.setElement && base.setElement(base)(this.state, this);
      base.mount && base.mount(base)(this.state);
    }

    disconnectedCallback() {
      base.unmount && base.unmount(base)(this.state);
    }
  }

  customElements.define(base.name(), Base);
};
