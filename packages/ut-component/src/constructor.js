import { when } from "ramda";
import { commit } from "./commit";

export const connectProps = when(
  element => element.component.props,
  element =>
    Object.keys(element.component.props).map(key =>
      Object.defineProperty(element, key, {
        get: () => element.component.props[key],
        set: val => {
          element.component = {
            ...element.component,
            props: {
              ...element.component.props,
              [key]: val
            }
          };
          commit(element);
        }
      })
    )
);

export const constructor = (element, component) => {
  element.component = {
    ...component
  };

  connectProps(element);
};
