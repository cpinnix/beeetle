/* global HTMLElement */

// i = Component Interface

import { when } from "ramda";

const connectState = element =>
  Object.defineProperty(element, "state", {
    get: () => when(i => i.read().getState, i => i.read().getState(i))(element),
    set: state =>
      when(i => i.read().updateState, i => i.read().updateState(i)(state))(
        element
      )
  });

const connectActions = element =>
  Object.defineProperty(element, "actions", {
    get: () =>
      when(i => i.read().getActions, i => i.read().getActions(i))(element),
    set: state =>
      when(i => i.read().updateActions, i => i.read().updateActions(i)(state))(
        element
      )
  });

const init = (element, component) => {
  element.component = {
    ...component
  };

  element.read = () => element.component;
  element.write = newComponent => {
    element.component = newComponent;
  };

  connectState(element);
  connectActions(element);
};

const connected = element => {
  element.component.element = element;
  when(i => i.read().mount, i => i.read().mount(i))(element);
};

const disconnected = element => {
  when(i => i.read().unmount, i => i.read().unmount(i))(element);
};

export const create = component => {
  class Base extends HTMLElement {
    constructor() {
      super();
      init(this, component);
    }

    connectedCallback() {
      connected(this);
    }

    disconnectedCallback() {
      disconnected(this);
    }
  }

  customElements.define(component.name, Base);

  when(
    component => component.componentDidCreate,
    component => component.componentDidCreate(component)
  )(component);
};
