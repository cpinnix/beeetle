/* global HTMLElement */

import { when } from "ramda";

const connectState = element =>
  Object.defineProperty(element, "state", {
    get: () =>
      when(
        element => element.read().getState,
        element => element.read().getState(element)
      )(element),
    set: state =>
      when(
        element => element.read().updateState,
        element => element.read().updateState(element)(state)
      )(element)
  });

const connectActions = element =>
  Object.defineProperty(element, "actions", {
    get: () =>
      when(
        element => element.read().getActions,
        element => element.read().getActions(element)
      )(element),
    set: state =>
      when(
        element => element.read().updateActions,
        element => element.read().updateActions(element)(state)
      )(element)
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
  when(
    element => element.read().mount,
    element => element.read().mount(element)
  )(element);
};

const disconnected = element => {
  when(
    element => element.read().unmount,
    element => element.read().unmount(element)
  )(element);
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
