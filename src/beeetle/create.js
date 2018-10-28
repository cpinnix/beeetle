/* global HTMLElement */

// i = Component Interface

import { when } from "ramda";
import { fromEvent } from "most";

const ACTION = "BEEETLE:ACTION";
const UPDATE_ACTIONS = "UPDATE_ACTIONS";
const UPDATE_STATE = "UPDATE_STATE";

const createEvent = (type, payload) =>
  new CustomEvent(ACTION, { detail: { type, payload } });

export const create = component => {
  class Base extends HTMLElement {
    constructor() {
      super();

      this.component = {
        ...component
      };

      this.read = () => this.component;

      const mainStream = fromEvent(ACTION, this).map(e => e.detail);

      mainStream
        .filter(action => action.type === UPDATE_ACTIONS)
        .map(action => action.payload)
        .forEach(payload => {
          this.component.actions = payload;
        });

      mainStream
        .filter(action => action.type === UPDATE_STATE)
        .map(action => action.payload)
        .forEach(payload => {
          this.component.state = payload;
        });

      this.dispatch = event => this.dispatchEvent(event);

      this.updateActions = payload => createEvent(UPDATE_ACTIONS, payload);

      this.updateState = payload => createEvent(UPDATE_STATE, payload);

      when(
        i => i.read().updateState,
        i => {
          Object.defineProperty(this, "state", {
            get: () => i.read().state,
            set: fn => i.read().updateState(i)(fn)
          });
        }
      )(this);

      when(
        i => i.read().updateActions,
        i => {
          Object.defineProperty(this, "actions", {
            get: () => i.read().actions,
            set: fn => i.read().updateActions(i)(fn)
          });
        }
      )(this);
    }

    connectedCallback() {
      this.component.element = this;
      when(i => i.read().mount, i => i.read().mount(i))(this);
    }

    disconnectedCallback() {
      when(i => i.read().unmount, i => i.read().unmount(i))(this);
    }
  }

  customElements.define(component.name, Base);

  when(
    component => component.componentDidCreate,
    component => component.componentDidCreate(component)
  )(component);
};
