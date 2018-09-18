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

      if (this.state.name && base.setName) {
        this.state = base.setName(base)(this.state)(() => this.state.name);
      }

      if (base.setProps) {
        this.state = base.setProps(base)(this.state)(() => this.state.props);

        Object.defineProperty(this, "props", {
          get: () => this.state.props,
          set: fn => {
            this.state = base.setProps(base)(this.state)(fn);
          }
        });
      }

      if (base.setActions) {
        this.state = base.setActions(base)(this.state)(
          () => this.state.actions
        );

        Object.defineProperty(this, "actions", {
          get: () => this.state.actions,
          set: fn => {
            this.state = base.setActions(base)(this.state)(fn);
          }
        });
      }

      if (this.state.i18n && base.setI18n) {
        this.state = base.setI18n(base)(this.state)(() => this.state.i18n);

        Object.defineProperty(this, "i18n", {
          get: () => this.state.i18n,
          set: fn => {
            this.state = base.setI18n(base)(this.state)(fn);
          }
        });
      }
    }

    connectedCallback() {
      if (base.setElement) {
        this.state = base.setElement(base)(this.state)(this);
      }
      base.mount && base.mount(base)(this.state);
    }

    disconnectedCallback() {
      base.unmount && base.unmount(base)(this.state);
    }
  }

  customElements.define(base.name(), Base);
};
